require("./Config/db");
const express = require("express");
const app = express();
const port = 1876;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Testing Todays server");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
