import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default staticRouter;
