const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = mongoose.connect(process.env.MONGO_DBURI);

const Kids = require("./models/kidsModel.js");
const { createKids } = require("./controllers/kidsContoller.js");

app.prepare().then(() => {
  const server = express();

  // Takes the raw requests and turns them into usable properties on req.body
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // const showRoutes = require("./routes/index.js");

  server.get("/", (req, res) => {
    Kids.find({}, (err, kids) => {
      // res.json(kids); // empty [] for now
      return app.render(req, res, "/kids");
    });
  });

  // server.get("/add", showRoutes);

  server.post("/add", createKids);

  // exports.createStore = async (req, res) => {
  //   req.body.author = req.user._id;
  //   const store = await new Store(req.body).save();
  //   // await store.save(); // waits until save succeeds
  //   req.flash("success", `Successfully created ${store.name}`);
  //   res.redirect(`/store/${store.slug}`);
  // };

  server.get("/b", (req, res) => {
    return app.render(req, res, "/b", req.query);
  });

  server.get("/posts/:id", (req, res) => {
    return app.render(req, res, "/posts", { id: req.params.id });
  });

  server.get("/api/shows", (req, res) => {
    return res.end("It works!");
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
