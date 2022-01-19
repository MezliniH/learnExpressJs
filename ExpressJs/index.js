const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static("views"));

const port = 5000;
app.listen(port, (err) => {
  if (err) {
    console.log("server is not running")
  }
  console.log('the server is running on port 5000')

});
