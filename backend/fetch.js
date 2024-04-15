// code to fetch shit from the mongodb server

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function fetchData() {
  try {
    await client.connect();
    const db = client.db("cluster0"); 

    // fetching from all of the collections
    const interests = await db.collection("interests").find({}).toArray();
    console.log("Interests:");
    console.log(interests);

    const users = await db.collection("users").find({}).toArray();
    console.log("Users:");
    console.log(users);

    const events = await db.collection("events").find({}).toArray();
    console.log("Events:");
    console.log(events);

    const attendees = await db.collection("attendees").find({}).toArray();
    console.log("Attendees:");
    console.log(attendees);

    const friends = await db.collection("friends").find({}).toArray();
    console.log("Friends:");
    console.log(friends);
  } finally {
    await client.close();
  }
}

fetchData().catch(console.error);
