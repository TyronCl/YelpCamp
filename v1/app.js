var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:3000/yelp_camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


app.get("/", function (req, res) {
  res.render("landing");
});

// shows all campgrounds
app.get("/campgrounds", function (req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function (err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", {
        campgrounds: allCampgrounds
      });
    }
  });
});
// logic for making new campground 
app.post("/campgrounds", function (req, res) {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {
    name: name,
    image: image
  }
  // Create a new campground and save to DB
  Campground.create(newCampground, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});
// shows form
app.get("/campgrounds/new", function (req, res) {
  res.render("new.ejs");
});

app.listen(3000, function () {
  console.log('GoGreenPestControl Server Has Started!');
});