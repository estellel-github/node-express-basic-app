require("dotenv").config();
const express = require("express");
const path = require("path");

const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Serve static HTML pages
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);
app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "public/about.html"))
);
app.get("/contact", (req, res) =>
  res.sendFile(path.join(__dirname, "public/contact.html"))
);
app.post("/contact", (req, res) => {
  // Handle contact form submissions (example response)
  res.json({ message: "Contact form submitted", data: req.body });
});

// Mount routers
app.use("/books", bookRouter);
app.use("/authors", authorRouter);

// 404 Handler
app.use((req, res) =>
  res.status(404).sendFile(path.join(__dirname, "public/404.html"))
);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
