const { getDb } = require("../db/database");

function insertUsername(data) {
  return getDb().collection("username").insertOne(data);
}

module.exports = {
  insertUsername,
};
