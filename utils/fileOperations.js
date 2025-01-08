const fs = require("fs");
const path = require("path");

const dataDir = path.resolve(__dirname, "../data");

const readJsonFile = (filePath) => {
  const fullPath = path.join(dataDir, filePath);
  if (!fs.existsSync(fullPath)) return [];
  return JSON.parse(fs.readFileSync(fullPath, "utf-8"));
};

const writeJsonFile = (filePath, data) => {
  const fullPath = path.join(dataDir, filePath);
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
};

module.exports = { readJsonFile, writeJsonFile };
