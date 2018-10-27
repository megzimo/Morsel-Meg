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

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/orders", function (req, res) {
  res.sendFile(path.join(__dirname, "orders.html"));
});
app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT)
});

//------Grab values from input form------

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/orders", function(req, res) {
  res.sendFile(path.join(__dirname, "orders.html"));
});

// Displays all cookies
app.get("/api/cookies", function(req, res) {
  return res.json(cookies);
});

// Displays a single cookie, or returns false
app.get("/api/cookies/:cookie", function(req, res) {
  var chosen = req.params.cookie;

  console.log(chosen);

  for (var i = 0; i < cookies.length; i++) {
    if (chosen === cookies[i].routeName) {
      return res.json(cookies[i]);
    }
  }

  return res.json(false);
});

// Create New cookies - takes in JSON input
app.post("/api/cookies", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcookie = req.body;

  // Using a RegEx Pattern to remove spaces from newcookie
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcookie.routeName = newcookie.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcookie);

  cookies.push(newcookie);

  res.json(newcookie);
});
