const { default: mongoose } = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb://0.0.0.0:27017/node-bitfumse")
}

module.exports = connectDB;

// const {MongoClient} = require('mongodb');

// // Fetch from local 
// const url = 'mongodb://0.0.0.0:27017';

// //  Initialize mongo client
// const client = new MongoClient(url);

// // Creating database name
// const dbName = "node-bitfumse";

// async function connect() {
//     await client.connect();
//     const db = await client.db(dbName);
//     return db;
// }

// module.exports = connect();