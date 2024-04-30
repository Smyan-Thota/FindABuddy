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

async function getUsers() {
  try {
    const db = client.db("cluster0");
    return await db.collection("users").find().toArray();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

async function getInterests() {
  try {
    const db = client.db("cluster0");
    return await db.collection("interests").find().toArray();
  } catch (error) {
    console.error("Error fetching interests:", error);
    throw error;
  }
}

async function getEvents() {
  try {
    const db = client.db("cluster0");
    return await db.collection("events").find().toArray();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

async function writeDataToFile(data, fileName) {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Data written to ${fileName}`);
  } catch (error) {
    console.error(`Error writing data to ${fileName}:`, error);
    throw error;
  }
}

async function readAndWriteDataToJson() {
  try {
    await connectToDatabase();

    const users = await getUsers();
    await writeDataToFile(users, '/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_read_jsons/users.json');

    const interests = await getInterests();
    await writeDataToFile(interests, '/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_read_jsons/interests.json');

    const events = await getEvents();
    await writeDataToFile(events, '/Users/rohansingh/github_repos/FindABuddy/backend/workaround/local_read_jsons/events.json');
  } catch (error) {
    console.error("Error reading and writing data to JSON:", error);
    throw error;
  } finally {
    await client.close();
  }
}

readAndWriteDataToJson();
