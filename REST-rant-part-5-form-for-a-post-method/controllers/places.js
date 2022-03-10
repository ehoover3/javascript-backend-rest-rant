const router = require("express").Router();
const places = require("../models/places.js");

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  console.log(req.body);
  places.push(req.body);
  res.redirect("/places");
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Details about a particular place");
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Update a particular place");
});

router.get("/:id/edit", (req, res) => {
  let id = req.params.id;
  res.send("Form page for editing an existing place");
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.send("Delete a particular place");
});

router.post("/:id/rant", (req, res) => {
  let id = req.params.id;
  res.send("Create a rant (comment) about a particular place");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  let id = req.params.id;
  let rantId = req.params.rantId;
  res.send("Delete a rant (comment) about a particular place");
});

module.exports = router;
