const fs = require('fs');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

async function addUser(user) {
  try {
    const db = client.db("cluster0");
    await db.collection("users").insertOne(user);
    console.log("User added:", user);
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

async function addInterest(interest) {
  try {
    const db = client.db("cluster0");
    await db.collection("interests").insertOne(interest);
    console.log("Interest added:", interest);
  } catch (error) {
    console.error("Error adding interest:", error);
    throw error;
  }
}

async function addEvent(event) {
  try {
    const db = client.db("cluster0");
    await db.collection("events").insertOne(event);
    console.log("Event added:", event);
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
}

async function readAndAddData() {
  try {
    // change filepath here
    const userData = JSON.parse(fs.readFileSync('/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_jsons/users.json', 'utf-8'));
    const interestData = JSON.parse(fs.readFileSync('/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_jsons/interests.json', 'utf-8'));
    const eventData = JSON.parse(fs.readFileSync('/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_jsons/events.json', 'utf-8'));

    for (const user of userData) {
      await addUser(user);
    }

    for (const interest of interestData) {
      await addInterest(interest);
    }

    for (const event of eventData) {
      await addEvent(event);
    }

    // clearing json
    fs.writeFileSync('/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_jsons/users.json', '[]', 'utf-8');
    fs.writeFileSync('/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_jsons/interests.json', '[]', 'utf-8');
    fs.writeFileSync('/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_jsons/events.json', '[]', 'utf-8');
    console.log("JSON files cleared");
  } catch (error) {
    console.error("Error reading and adding data:", error);
    throw error;
  }
}

(async () => {
  try {
    await connectToDatabase();
    await readAndAddData();
  } finally {
    await client.close();
  }
})();
