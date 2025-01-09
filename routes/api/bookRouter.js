import { Router } from "express";
import {
  getBookById,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  reserveBook,
} from "../../controllers/bookController.js";

const bookRouter = Router();

bookRouter.get("/", getBooks);

bookRouter.get("/:bookId", getBookById);

bookRouter.post("/:bookId", createBook);

bookRouter.put("/:bookId", updateBook);

bookRouter.put("/:bookId", deleteBook);

bookRouter.get("/:bookId/reserve", reserveBook);

export default bookRouter;
