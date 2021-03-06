"use strict";

// Basic express setup:

const PORT          = process.env.PORT || 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const makeDataHelpers = require("./lib/data-helpers.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  const DataHelpers = makeDataHelpers(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });

});
