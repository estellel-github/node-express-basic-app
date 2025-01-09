import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import staticRouter from "./routes/staticRouter.js";
import bookRouter from "./routes/api/bookRouter.js";
import authorRouter from "./routes/api/authorRouter.js";
import contactRouter from "./routes/api/contactRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", staticRouter);

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/contact", contactRouter);

app.use(notFound);
app.use(errorHandler);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "public/404.html"))
);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
