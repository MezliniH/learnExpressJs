const express = require("express");

const app = express();

app.use(express.json());

app.use(
  (closingTime = (req, res, next) => {
    let hours = new Date().getHours();
    let day = new Date().getDay();
    if ((hours <= 9) || (hours >= 17) || (day == 0) || (day == 6)) {
      res.sendFile(__dirname + "/views/404.html");
    } else {
      next();
    }
  })
);

app.use(express.static("views"));

const port =  5000;
app.listen(port, (err) => {
  if (err) {
    console.log("server is not running")
  }
  console.log('the server is running on port 5000')

});
