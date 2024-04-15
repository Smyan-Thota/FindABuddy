// as the name suggests, this is a test script for CRUD functionality

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
} = require('./crudFunctions.js'); 

const {
    fetchData
} = require('./fetchAll.js')
  

readEvent("661d7926b5058ef3f40c3c2f")

fetchData()