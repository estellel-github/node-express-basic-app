const { Router } = require("express");
const { readJsonFile, writeJsonFile } = require("../../utils/fileOperations");

const authorRouter = Router();
const authorsFile = "authors.json";

authorRouter.get("/", (req, res) => {
  const authors = readJsonFile(authorsFile);
  res.json(authors);
});

authorRouter.get("/:authorId", (req, res) => {
  const authors = readJsonFile(authorsFile);
  const author = authors.find((a) => a.id === parseInt(req.params.authorId));
  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }
  res.json(author);
});

authorRouter.post("/", (req, res) => {
  const authors = readJsonFile(authorsFile);
  const newAuthor = req.body;

  if (!newAuthor.name || !Array.isArray(newAuthor.books)) {
    return res.status(400).json({ error: "Invalid author data." });
  }

  const newId = authors.length > 0 ? authors[authors.length - 1].id + 1 : 1;
  newAuthor.id = newId;

  authors.push(newAuthor);
  writeJsonFile(authorsFile, authors);

  res
    .status(201)
    .json({ message: "Author created successfully!", author: newAuthor });
});

module.exports = authorRouter;
