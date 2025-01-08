require("dotenv").config();
const express = require("express");
const path = require("path");

const staticRouter = require("./routes/staticRouter");
const bookRouter = require("./routes/api/bookRouter");
const authorRouter = require("./routes/api/authorRouter");
const contactRouter = require("./routes/api/contactRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", staticRouter);

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/contact", contactRouter);

app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "public/404.html"))
);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
