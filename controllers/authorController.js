import { readJsonFile, writeJsonFile } from "../utils/fileOperations.js";

const authorsFile = "authors.json";

// @desc    Get all authors
// @route   GET /api/authors
export const getAuthors = (req, res, next) => {
  const authors = readJsonFile(authorsFile);
  if (!authors) {
    const error = new Error("No authors to display");
    error.status = 404;
    return next(error);
  }
  res.json(authors);
};

// @desc    Get single author
// @route   GET /api/authors/:id
export const getAuthorById = (req, res, next) => {
  const authors = readJsonFile(authorsFile);
  const author = authors.find((a) => a.id === parseInt(req.params.authorId));
  if (!author) {
    const error = new Error("Author not found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(author);
};

// @desc    Create new author
// @route   POST /api/authors

export const createAuthor = (req, res, next) => {
  const authors = readJsonFile(authorsFile);
  const newAuthor = req.body;

  if (!newAuthor.name || !Array.isArray(newAuthor.books)) {
    const error = new Error("Invalid author data");
    error.status = 400;
    return next(error);
  }

  const newId = authors.length > 0 ? authors[authors.length - 1].id + 1 : 1;
  newAuthor.id = newId;

  authors.push(newAuthor);
  writeJsonFile(authorsFile, authors);

  res
    .status(201)
    .json({ message: "Author created successfully!", author: newAuthor });
};

// @desc    Update author
// @route   PUT /api/authors/:id
export const updateAuthor = (req, res, next) => {
  const authors = readJsonFile(authorsFile);
  const authorIndex = authors.findIndex(
    (a) => a.id === parseInt(req.params.authorId)
  );
  if (authorIndex === -1) {
    const error = new Error("Author not found");
    error.status = 404;
    return next(error);
  }

  const updatedAuthor = { ...authors[authorIndex], ...req.body };
  authors[authorIndex] = updatedAuthor;
  writeJsonFile(authorsFile, authors);

  res
    .status(200)
    .json({ message: "Author updated successfully!", author: updatedAuthor });
};

// @desc    Delete author
// @route   DELETE /api/authors/:id
export const deleteAuthor = (req, res, next) => {
  const authors = readJsonFile(authorsFile);
  const authorIndex = authors.findIndex(
    (a) => a.id === parseInt(req.params.authorId)
  );
  if (authorIndex === -1) {
    const error = new Error("Author not found");
    error.status = 404;
    return next(error);
  }

  authors.splice(authorIndex, 1);
  writeJsonFile(authorsFile, authors);

  res.status(200).json({ message: "Author deleted successfully!" });
};
