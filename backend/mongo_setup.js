// code for mongodb setup

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const db = client.db("cluster0");

    // creating the collections
    await createInterestsCollection(db);
    await createUsersCollection(db);
    await createEventsCollection(db);
    await createAttendeesCollection(db);
    await createFriendsCollection(db);

    // inserting sample data
    await insertSampleData(db);

    console.log("Setup completed successfully!");
  } finally {
    await client.close();
  }
}


// functions to create the collections 
async function createInterestsCollection(db) {
  await db.createCollection("interests");
}

async function createUsersCollection(db) {
  await db.createCollection("users");
}

async function createEventsCollection(db) {
  await db.createCollection("events");
}

async function createAttendeesCollection(db) {
  await db.createCollection("attendees");
}

async function createFriendsCollection(db) {
  await db.createCollection("friends");
}


// trying out by adding some data
async function insertSampleData(db) {
  await db.collection("interests").insertMany([
    {
      created_at: new Date(),
      interest_id: 1,
      interest_name: "Beer Pong",
      subscribed_users: []
    },
    {
      created_at: new Date(),
      interest_id: 2,
      interest_name: "Pissing on the sidewalk",
      subscribed_users: []
    }
  ]);

  
}

run().catch(console.dir);
