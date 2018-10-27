const http = require("http");
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.get("/orders", function(req, res) {
    res.sendFile(path.join(__dirname, "orders.html"));
  });
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT)
});

//------Grab values from input form------

// $(".submit").on("click" function(){

// })