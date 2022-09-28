const mongoose = require("mongoose");
const url = "mongodb://localhost/luxuryCarsDB";

mongoose
  .connect(url)
  .then(() => {
    console.log("connected.........");
  })
  .catch(() => {
    console.log("connection failed");
  });
