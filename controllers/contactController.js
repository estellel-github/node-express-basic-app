import { readJsonFile, writeJsonFile } from "../../utils/fileOperations.js";

const contactFile = "contact-submissions.json";

// @desc      Get the contact submissions
// @route     GET /api/contactRouter
export const getSubmissions = (req, res) => {
  const submissions = readJsonFile(contactFile);
  res.json(submissions);
};

// @desc      Create a contact submission
// @route     POST /api/contactRouter
export const createSubmission = (req, res) => {
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
};

export default contactRouter;
