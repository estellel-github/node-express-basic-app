require("dotenv").config();
console.log(`Port from environment: ${process.env.PORT}`);
const PORT = process.env.PORT || 3000;

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";

  switch (req.url) {
    case "/":
      filePath = path.join(__dirname, "index.html");
      break;
    case "/about":
      filePath = path.join(__dirname, "about.html");
      break;
    case "/contact-me":
      filePath = path.join(__dirname, "contact-me.html");
      break;
    default:
      filePath = path.join(__dirname, "404.html");
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Express app running at http://localhost:${PORT}/`);
});
