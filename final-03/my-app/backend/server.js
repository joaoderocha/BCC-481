const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3001;
const appendToJson = require("./appendToJson");
const { connect, disconnect } = require("./db");

const app = express();

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(cors());
app.use(express.json());

app.post("/api/butao", (req, res) => {
  appendToJson(req.body);
});

app.on("close", disconnect);

app.listen(PORT, () => {
  const connected = connect();
  if (connected) {
    console.log("Mongodb initialized!");
  }

  console.log(`Server listening on ${PORT}`);
});
