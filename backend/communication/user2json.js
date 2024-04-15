const { MongoClient } = require('mongodb');
const fs = require('fs');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function fetchUserByUsername(username) {
  try {
    await client.connect();
    const db = client.db("cluster0"); // Change "your_database_name" to your actual database name
    const user = await db.collection("users").findOne({ username: username });
    return user;
  } finally {
    await client.close();
  }
}

async function writeUserToJsonFile(username, filename) {
  try {
    const user = await fetchUserByUsername(username);
    if (!user) {
      console.log(`User with username '${username}' not found.`);
      return;
    }

    const jsonUser = JSON.stringify(user, null, 2);
    fs.writeFileSync(filename, jsonUser);
    console.log(`User data for '${username}' has been written to ${filename}.`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}


// example usage
const username = "harold_connie"; 
const filename = "harold_connie.json"; 
writeUserToJsonFile(username, filename);
