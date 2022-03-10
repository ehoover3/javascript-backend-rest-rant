const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "http://placekitten.com/250/250",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "http://placekitten.com/250/250",
    },
  ];
  res.render("places/index", { places });
});

router.post("/", (req, res) => {
  res.send("Create new place");
});

router.get("/new", (req, res) => {
  res.send("Form page for creating a new place");
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
