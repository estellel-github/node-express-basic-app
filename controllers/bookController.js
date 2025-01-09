import { readJsonFile, writeJsonFile } from "../../utils/fileOperations.js";

const books = readJsonFile(booksFile);

// @desc    Get all books
// @route   GET /api/books
export const getBooks = (req, res) => {
  if (!books) {
    const error = new Error("No books to display");
    error.status = 404;
    return next(error);
  }
  res.json(books);
};

// @desc    Get single book
// @route   GET /api/books/:id
export const getBookById = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.bookId));
  if (!book) {
    const error = new Error("Book not found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(book);
};

// @desc    Reserve a book
// @route   GET /api/books/:id/reserve
export const reserveBook = (req, res) => {
  const books = readJsonFile(booksFile);
  const bookIndex = books.findIndex(
    (b) => b.id === parseInt(req.params.bookId)
  );
  if (bookIndex === -1) {
    const error = new Error("Book not found");
    error.status = 404;
    return next(error);
  }
  if (books[bookIndex].reserved) {
    return res.json({ message: "Book is already reserved." });
  }

  books[bookIndex].reserved = true;
  writeJsonFile(booksFile, books);
  res.json({ message: "Book reserved successfully.", book: books[bookIndex] });
};

// @desc    Create new book
// @route   POST /api/books
export const createBook = (req, res) => {
  const newBook = req.body;

  if (!newBook.title || !newBook.author) {
    const error = new Error("Invalid book data");
    error.status = 400;
    return next(error);
  }

  const newId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
  newBook.id = newId;

  books.push(newBook);
  writeJsonFile(booksFile, books);

  res
    .status(201)
    .json({ message: "Book created successfully!", book: newBook });
};

// @desc    Update book
// @route   PUT /api/books/:id
export const updateBook = (req, res) => {
  const bookIndex = books.findIndex(
    (b) => b.id === parseInt(req.params.bookId)
  );
  if (bookIndex === -1) {
    const error = new Error("Book not found");
    error.status = 404;
    return next(error);
  }

  const updatedBook = { ...books[bookIndex], ...req.body };
  books[bookIndex] = updatedBook;
  writeJsonFile(booksFile, books);

  res
    .status(200)
    .json({ message: "Book updated successfully!", book: updatedBook });
};

// @desc    Delete book
// @route   DELETE /api/books/:id
export const deleteBook = (req, res) => {
  const bookIndex = books.findIndex(
    (b) => b.id === parseInt(req.params.bookId)
  );
  if (bookIndex === -1) {
    const error = new Error("Book not found");
    error.status = 404;
    return next(error);
  }

  books.splice(bookIndex, 1);
  writeJsonFile(booksFile, books);

  res.status(200).json({ message: "Book deleted successfully!" });
};
