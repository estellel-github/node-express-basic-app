import { Router } from "express";
import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from "../../controllers/authorController.js";

const authorRouter = Router();
const authorsFile = "authors.json";

authorRouter.get("/", getAuthors);

authorRouter.get("/:authorId", getAuthorById);

authorRouter.post("/", createAuthor);

authorRouter.put("/", updateAuthor);

authorRouter.delete("/", deleteAuthor);

export default authorRouter;
