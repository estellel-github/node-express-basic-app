const { Router } = require("express");
const fs = require("fs");
const path = require("path");

const bookRouter = Router();
const booksFile = path.join(__dirname, "../data/books.json");

// Read books data
const getBooks = () => JSON.parse(fs.readFileSync(booksFile, "utf-8"));

// GET /books
bookRouter.get("/", (req, res) => {
  const books = getBooks();
  res.json(books);
});

// GET /books/:bookId
bookRouter.get("/:bookId", (req, res) => {
  const books = getBooks();
  const book = books.find((b) => b.id === parseInt(req.params.bookId));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

// GET /books/:bookId/reserve
bookRouter.get("/:bookId/reserve", (req, res) => {
  const books = getBooks();
  const bookIndex = books.findIndex(
    (b) => b.id === parseInt(req.params.bookId)
  );
  if (bookIndex === -1)
    return res.status(404).json({ error: "Book not found" });

  if (books[bookIndex].reserved) {
    return res.json({ message: "Book is already reserved." });
  }

  books[bookIndex].reserved = true;
  fs.writeFileSync(booksFile, JSON.stringify(books, null, 2));
  res.json({ message: "Book reserved successfully.", book: books[bookIndex] });
});

// POST /books/:bookId/reserve
bookRouter.post("/:bookId/reserve", (req, res) => {
  const books = getBooks();
  const bookIndex = books.findIndex(
    (b) => b.id === parseInt(req.params.bookId)
  );
  if (bookIndex === -1)
    return res.status(404).json({ error: "Book not found" });

  books[bookIndex].reserved = true;
  fs.writeFileSync(booksFile, JSON.stringify(books, null, 2));
  res.json({ message: "Book reserved successfully.", book: books[bookIndex] });
});

module.exports = bookRouter;
