const { Router } = require("express");
const fs = require("fs");
const path = require("path");

const authorRouter = Router();
const authorsFile = path.join(__dirname, "../data/authors.json");

// Read authors data
const getAuthors = () => JSON.parse(fs.readFileSync(authorsFile, "utf-8"));

// GET /authors
authorRouter.get("/", (req, res) => {
  const authors = getAuthors();
  res.json(authors);
});

// GET /authors/:authorId
authorRouter.get("/:authorId", (req, res) => {
  const authors = getAuthors();
  const author = authors.find((a) => a.id === parseInt(req.params.authorId));
  if (!author) return res.status(404).json({ error: "Author not found" });
  res.json(author);
});

module.exports = authorRouter;
