import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dataDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../data"
);

export const readJsonFile = (filePath) => {
  const fullPath = path.join(dataDir, filePath);
  if (!fs.existsSync(fullPath)) return [];
  return JSON.parse(fs.readFileSync(fullPath, "utf-8"));
};

export const writeJsonFile = (filePath, data) => {
  const fullPath = path.join(dataDir, filePath);
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
};
