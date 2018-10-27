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

var orders = [
    {
        name: "Tina",
        phoneNumber: 5555555555,
        email: "email@email.com",
        uniqueID: "Tina ID"
    }]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
app.get("/orders", function(req, res) {
    res.sendFile(path.join(__dirname, "orders.html"));
  });
app.get("/api/orders", function(req, res) {
    return res.json(orders);
  });


  app.post("/api/orders", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var neworder = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/re
  
    console.log(neworder);
  
    orders.push(neworder);
  
    res.json(neworder);
  });


 

app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT)
});

