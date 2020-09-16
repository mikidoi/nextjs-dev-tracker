const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const next = require("next");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = mongoose.connect(process.env.MONGO_DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Kids = require("./models/kidsModel.js");
const { catchErrors } = require("../handlers/helpers");
const kidsContoller = require("./controllers/kidsContoller");

app.prepare().then(() => {
  const server = express();

  server.use(cookieParser("keyboard cat"));
  server.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 },
    })
  );
  server.use(flash());

  // Takes the raw requests and turns them into usable properties on req.body
  server.use(bodyParser.json({ limit: "50mb" }));
  server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

  // const showRoutes = require("./routes/index.js");

  server.get("/api/kids", async (req, res) => {
    const kids = await kidsContoller.getKids(req, res);
  });

  server.get("/kid/:slug", async (req, res, next) => {
    // const kid = await kidsContoller.getKidBySlug(req, res, next);
    // console.log("kid: ", kid);
    console.log("req.params.slug: ", req.params.slug);
    const kidData = await Kids.findOne({ slug: req.params.slug });
    if (!kidData) {
      next();
    }
    console.log(kidData);
    return app.render(req, res, `/kid/${req.params.slug}`);
  });

  // server.get("/add", showRoutes);

  server.post(
    "/add",
    kidsContoller.upload,
    kidsContoller.resize,
    kidsContoller.createKids
  );

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
