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
async function readUser(userId) {
  try {
    await client.connect();
    const db = client.db("cluster0"); // Change "your_database_name" to your actual database name

    // Find user by userId
    const user = await db.collection("users").findOne({ _id: ObjectId(userId) });
    console.log("Found user:");
    console.log(user);
  } finally {
    await client.close();
  }
}


// function to update a user
async function updateUser(userId, updatedUser) {
  try {
    await client.connect();
    const db = client.db("cluster0"); 

    const result = await db.collection("users").updateOne({ _id: ObjectId(userId) }, { $set: updatedUser });
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

    const result = await db.collection("users").deleteOne({ _id: ObjectId(userId) });
    console.log(`Deleted ${result.deletedCount} user(s)`);
  } finally {
    await client.close();
  }
}

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


// demo/test function for create
async function testCreate() {
  await createUser(user);
}


// demo/test function for RUD
async function testRUD(userId){
  // await readUser(userId); 
  // await updateUser(userId, { age: 50 }); 
  await deleteUser(userId); 
}


//testCreate().catch(console.error);

testRUD("66030c3813285b469bfbd81a").catch(console.error)
