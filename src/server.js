const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/examples", async (req, res) => {
  return res.status(200).send({ message: "Hello World" });
});

module.exports = app;
