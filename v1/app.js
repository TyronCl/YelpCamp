var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  var campgrounds = [{
      name: "Salmon Creek",
      image: "https://pixabay.com/get/52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c72287fd79248cc5a_340.jpg"
    },
    {
      name: "Granite Hill",
      image: "https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c72287fd79248cc5a_340.jpg"
    },
    {
      name: "Mountain Goat's Rest",
      image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c72287fd29245c15b_340.jpg"
    }
  ]

  res.render("campgrounds", {
    campgrounds: campgrounds
  });
});

app.post("/campgrounds", function (req, res) {
  res.send("You hit the first route!");
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
});

app.get("/campgrounds/new", function (req, res) {
  res.render("new.ejs");
});

app.listen(3000, function () {
  console.log('GoGreenPestControl Server Has Started!');
});