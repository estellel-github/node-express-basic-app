import { Router } from "express";
import {
  getSubmissions,
  createSubmission,
} from "../../controllers/contactController.js";

const contactRouter = Router();

contactRouter.get("/submissions", getSubmissions);

contactRouter.post("/", createSubmission);

export default contactRouter;
