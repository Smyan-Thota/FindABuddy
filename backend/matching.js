const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// Function to fetch a user by username
async function getUser(username, db) {
  return await db.collection("users").findOne({ username: username });
}

// Function to fetch all users subscribed to the same interests
async function fetchUsersByInterest(interestName, db) {
  const interests = await db.collection("interests").findOne({ interest_name: interestName });
  const subscribedUserIds = interests.subscribed_users;
  return await db.collection("users").find({ user_id: { $in: subscribedUserIds } }).toArray();
}

// Function to perform the matching algorithm
async function matchingAlgorithm(username) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    const target = await getUser(username, db);

    const scoreArray = [];

    // Iterating through each user
    const allUsers = await db.collection("users").find({}).toArray();
    for (const user of allUsers) {

      // Fetching all interests subscribed by the user
      const userInterests = [];
      for (const interestId of user.subscribed_interests) {
        const interest = await db.collection("interests").findOne({ interest_id: interestId });
        userInterests.push(interest.interest_name);
      }

      let score = 0;

      // Iterating through all interests subscribed by the target user
      for (const targetInterest of target.subscribed_interests) {
        
        if (userInterests.includes(targetInterest)) {
          score += 0.25; // A matching interest is worth 0.25
        }
      }

      // Store the score
      scoreArray.push({ user: user, score: score });
    }
    
    // Sorting the array of scores in ascending order
    scoreArray.sort((a, b) => {
      if (a.score === b.score) {
          // If scores are equal, use user ID to break ties
          return a.user.user_id - b.user.user_id;
      }
      return a.score - b.score;
  });

    // Extracting the sorted list of users
    const sortedUsers = scoreArray.map(entry => entry.user);

    return sortedUsers;
  } catch (error) {
    console.error("Error in matching algorithm:", error);
    throw error;
  } finally {
    await client.close();
  }
}

// Example usage
(async () => {
  const sortedUsers = await matchingAlgorithm("harold_connie");
  console.log("Sorted users by compatibility:", sortedUsers);
})();
