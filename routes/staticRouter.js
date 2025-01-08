const { Router } = require("express");
const path = require("path");

const staticRouter = Router();

staticRouter.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

staticRouter.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/about.html"))
);

staticRouter.get("/contact", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/contact.html"))
);

module.exports = staticRouter;
