const { collection } = require("./models");

module.exports = async function appendToJson(obj) {
  const insertedObj = await collection.insertUsername(obj);
  console.log(insertedObj);
};
