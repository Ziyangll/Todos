const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/", "build")));

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const itemSchema = {
  name: String,
};

const Item = mongoose.model("Item", itemSchema);
const exampleItem = new Item({
  name: "welcome to your todo list",
});
const exampleItem1 = new Item({
  name: "built with Mongodb Express React Node",
});
defaultItems = [exampleItem, exampleItem1];

// server stuff
app.get("/", (req, res) => {
  res.render("index");
});

// crud (create if empty, read the items)
app.get("/api/todo", (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    }
    if (foundItems == 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("created default items");
        }
      });
    }
    res.send({ todoListItems: foundItems });
  });
});

// crud (create)
app.post("/api/todo/create", bodyParser.json(), (req, res) => {
  if (req.body.name.trim().length > 0) {
    const aNewItem = new Item({
      name: req.body.name,
    });
    aNewItem.save((err) => {
      if (err) console.log(err);
    });
  }
  res.redirect("/");
});
// crud (delete)
app.post("/api/todo/delete", bodyParser.json(), (req, res) => {
  Item.findByIdAndRemove(req.body.id, (err) => {
    if (err) console.log(err);
  });
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("running on port 8080");
});
