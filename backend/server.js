"use strict";
const express = require("express");
const questions = require("./questions.api");
const scores = require("./scores.api");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", questions);
app.use("/", scores);
let port = 3000;
app.listen(port, (_) =>
  console.log(`Server running on
port: ${port}`)
);
