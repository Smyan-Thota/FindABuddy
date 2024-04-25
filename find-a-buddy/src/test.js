const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://rxs1182:rs181102@cluster0.vqmsrmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const {
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
} = require('../../backend/crudFunctions.js'); 

const {
    fetchData
} = require('../../backend/fetchAll.js')
  

async function test(){
    const x = await readUser("harold_connie");
    console.log(x);
}


test();