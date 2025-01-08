const { Router } = require("express");
const { readJsonFile, writeJsonFile } = require("../../utils/fileOperations");

const bookRouter = Router();
const booksFile = "books.json";

bookRouter.get("/", (req, res) => {
  const books = readJsonFile(booksFile);
  res.json(books);
});

bookRouter.get("/:bookId", (req, res) => {
  const books = readJsonFile(booksFile);
  const book = books.find((b) => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const books = readJsonFile(booksFile);
  const bookIndex = books.findIndex(
    (b) => b.id === parseInt(req.params.bookId)
  );
  if (bookIndex === -1)
    return res.status(404).json({ error: "Book not found" });

  if (books[bookIndex].reserved) {
    return res.json({ message: "Book is already reserved." });
  }

  books[bookIndex].reserved = true;
  writeJsonFile(booksFile, books);
  res.json({ message: "Book reserved successfully.", book: books[bookIndex] });
});

module.exports = bookRouter;
