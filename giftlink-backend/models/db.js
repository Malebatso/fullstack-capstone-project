const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "giftlink";

let db;

async function connectToDatabase() {
  if (db) {
    return db;
  }

  const client = new MongoClient(url);
  await client.connect();

  db = client.db(dbName);
  console.log("Connected to MongoDB");

  return db;
}

module.exports = { connectToDatabase };