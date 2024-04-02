const { MongoClient } = require('mongodb');
const fs = require('fs');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function addUserFromJson(filename) {
  try {
    await client.connect();
    const db = client.db("cluster0"); 

    // reading user data from JSON file
    const userData = JSON.parse(fs.readFileSync(filename, 'utf8'));

    // inserting user into the users collection
    const result = await db.collection("users").insertOne(userData);
    console.log(`User added with the _id: ${result.insertedId}`);

  } finally {
    await client.close();
  }
}


// example usage
const filename = "/Users/rohansingh/github_repos/FindABuddy/backend/sample_jsons/sample_user.json"; 
addUserFromJson(filename);
