const { MongoClient } = require("mongodb");

let client, db;

module.exports = {
  async connect() {
    client = await MongoClient.connect("mongodb://localhost");
    db = client.db("my-db");
  },
  getDb() {
    return db;
  },
  async disconnect() {
    await client.close();
  },
};
