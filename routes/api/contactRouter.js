const { Router } = require("express");
const { readJsonFile, writeJsonFile } = require("../../utils/fileOperations");

const contactRouter = Router();
const contactFile = "contact-submissions.json";

contactRouter.get("/submissions", (req, res) => {
  const submissions = readJsonFile(contactFile);
  res.json(submissions);
});

contactRouter.post("/", (req, res) => {
  const submissions = readJsonFile(contactFile);
  const newSubmission = req.body;

  if (!newSubmission.name || !newSubmission.email || !newSubmission.message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  submissions.push(newSubmission);
  writeJsonFile(contactFile, submissions);

  res.status(201).json({
    message: "Contact form submitted successfully!",
    data: newSubmission,
  });
});

module.exports = contactRouter;
