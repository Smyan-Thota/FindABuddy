// as the name suggests, this is a script for CRUD functionality

const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);


// function to create a user
async function createUser(user) {
  try {
    await client.connect();
    const db = client.db("cluster0"); 

    const result = await db.collection("users").insertOne(user);
    console.log(`User added with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}


// function read a user
async function readUser(username) {
  try {
    await client.connect();
    const db = client.db("cluster0"); // Change "your_database_name" to your actual database name

    // Find user by userId
    const user = await db.collection("users").findOne({ username: username});
    //console.log("Found user:");
    //console.log(user);
    return user;
  } finally {
    await client.close();
  }
}


// function to update a user
async function updateUser(userId, updatedUser) {
  try {
    await client.connect();
    const db = client.db("cluster0"); 

    const result = await db.collection("users").updateOne({ _id: new ObjectId(userId) }, { $set: updatedUser });
    console.log(`Updated ${result.modifiedCount} user(s)`);
  } finally {
    await client.close();
  }
}


// function to delete a user
async function deleteUser(userId) {
  try {
    await client.connect();
    const db = client.db("cluster0"); 

    const result = await db.collection("users").deleteOne({ _id: new ObjectId(userId) });
    console.log(`Deleted ${result.deletedCount} user(s)`);
  } finally {
    await client.close();
  }
}



// Function to create an interest
async function createInterest(interest) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    const result = await db.collection("interests").insertOne(interest);
    console.log(`Interest added with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}


// Function to read an interest
async function readInterest(interest_name) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    // Find interest by interestId
    const interest = await db.collection("interests").findOne({ interest_name: interest_name });
    //console.log("Found interest:");
    //console.log(interest);
    return interest;
  } finally {
    await client.close();
  }
}


// Function to update an interest
async function updateInterest(interestId, updatedInterest) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    const result = await db.collection("interests").updateOne({ _id: new ObjectId(interestId) }, { $set: updatedInterest });
    console.log(`Updated ${result.modifiedCount} interest(s)`);
  } finally {
    await client.close();
  }
}


// Function to delete an interest
async function deleteInterest(interestId) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    const result = await db.collection("interests").deleteOne({ _id: new ObjectId(interestId) });
    console.log(`Deleted ${result.deletedCount} interest(s)`);
  } finally {
    await client.close();
  }
}



// Function to create an event
async function createEvent(event) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    const result = await db.collection("events").insertOne(event);
    console.log(`Event added with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}


// Function to read an event
async function readEvent(eventId) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    // Find event by eventId
    const event = await db.collection("events").findOne({ _id: new ObjectId(eventId) });
    //console.log("Found event:");
    //console.log(event);
    return event;
  } finally {
    await client.close();
  }
}


// Function to update an event
async function updateEvent(eventId, updatedEvent) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    const result = await db.collection("events").updateOne({ _id: new ObjectId(eventId) }, { $set: updatedEvent });
    console.log(`Updated ${result.modifiedCount} event(s)`);
  } finally {
    await client.close();
  }
}


// Function to delete an event
async function deleteEvent(eventId) {
  try {
    await client.connect();
    const db = client.db("cluster0");

    const result = await db.collection("events").deleteOne({ _id: new ObjectId(eventId) });
    console.log(`Deleted ${result.deletedCount} event(s)`);
  } finally {
    await client.close();
  }
}

/*
Testing

*/

// Demo interest object
const interest = {
    interest_id: 1,
    interest_name: "Hiking",
    subscribed_users: []
  };


// Demo event object
const event = {
    "event_name": "Hiking Trip",
    "event_description": "Join us for a fun hiking trip!",
    "event_location": "Mountains",
    "time_start": "2024-03-25T08:00:00Z",
    "time_end": "2024-03-25T16:00:00Z",
    "creator_id": 1,
    "created_at": "2024-03-21T00:00:00Z"
};


// demo user object
const user = {
    username: "harold_connie",
    password: "racket",
    age: 45,
    gender: "Male",
    grad_year: 2023,
    major: "Computer Science",
    schedule: "PLC",
    created_at: new Date()
};






async function testCreate() {
  await createUser(user);
  await createInterest(interest);
  await createEvent(event);
}


async function testRUD(userId, interest_id, event_id){
  await readUser(userId); 
  await updateUser(userId, { age: 50 }); 
  await deleteUser(userId);

  await readInterest(interest_id); 
  await updateInterest(interest_id, { interest_name: "swimming" }); 
  await deleteInterest(interest_id);

  await readEvent(event_id); 
  await updateEvent(event_id, { event_name: "Party" }); 
  await deleteEvent(event_id); 
}


//testCreate().catch(console.error);

//testRUD("661d78f59f9ffce45a3d800c","661d78f59f9ffce45a3d800d","661d78f69f9ffce45a3d800e").catch(console.error)

// Exporting the functions
module.exports = {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  createInterest,
  readInterest,
  updateInterest,
  deleteInterest,
  createEvent,
  readEvent,
  updateEvent,
  deleteEvent
};
