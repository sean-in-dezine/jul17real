const express = require("express");
const app = express();
const path = require("path");
const colors = require("colors");
const morgan = require("morgan");
const router = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')

const port = 3559;
console.log("server".brightMagenta);
app.use(morgan("dev"));
app.listen(port, console.log(`listening on port ${port}`.brightBlue.bold));


const connectDB = require('./db/traversy')
connectDB()

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static(__dirname + "/"));

let request_logger = require("./middleware.js");
request_logger = request_logger.request_logger;
app.use("/", request_logger);

let handlers = require("./handlers");
handlers = handlers.handlers;
handlers();
app.use(router);



// ! route @ "/" [index]
// *|auth |login |inception
// ?method: 'GET' lot: 
app.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  console.log(req.originalUrl, req.method);
  res.sendFile(__dirname + "/auth.html");
});
// ! route @ "/" [index]
// *|auth |login |inception
app.post("/", (req, res, next) => {
  console.log(req.url, req.method);
  console.log(req.originalUrl, req.method);
  res.json({
    posted: "on the index route, check your fetch",
  });
});


app.post("/users", (req, res, next) => {
  console.log(req.url, req.method);
  console.log(req.originalUrl, req.method);
  res.json({
    success: "true",
  });
});
