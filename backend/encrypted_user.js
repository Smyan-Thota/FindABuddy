// this code will add a user and encrypt the password using the el gamal cryptosystem

const { MongoClient } = require('mongodb');
const NodeRSA = require('node-rsa');
const fs = require('fs');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// generating ElGamal key pair
const key = new NodeRSA({ b: 512 }); 


function encryptPassword(password) {
    return key.encrypt(password, 'base64').substring(0, 12);
}

//console.log(key)
//console.log(encryptPassword("rohan"))


async function addUserFromJson(filename) {
    try {
        await client.connect();
        const db = client.db("cluster0"); 

        const userData = JSON.parse(fs.readFileSync(filename, 'utf8'));

        const encryptedPassword = encryptPassword(userData.password);
        userData.password = encryptedPassword;

        const result = await db.collection("users").insertOne(userData);
        console.log(`User added with the _id: ${result.insertedId}`);

        
    } finally {
        await client.close();
    }
}


// example usage
const filename = "/Users/rohansingh/github_repos/FindABuddy/backend/sample_jsons/sample_user.json"; 
addUserFromJson(filename);
