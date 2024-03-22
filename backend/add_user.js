// demo code to add users

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function addUser(user) {
  try {
    await client.connect();
    const db = client.db("cluster0"); 

    const result = await db.collection("users").insertOne(user);
    console.log(`User added with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

//test user
const user = {
  username: "smyan",
  password: "12345678",
  age: 21,
  gender: "Male",
  grad_year: 2024,
  major: "Computer Science",
  schedule: "free",
  created_at: new Date()
};


addUser(user).catch(console.error);
