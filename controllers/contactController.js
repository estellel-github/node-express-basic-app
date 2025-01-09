import { readJsonFile, writeJsonFile } from "../utils/fileOperations.js";

const contactFile = "contact-submissions.json";

// @desc      Get the contact submissions
// @route     GET /api/contactRouter
export const getSubmissions = (req, res, next) => {
  const submissions = readJsonFile(contactFile);

  if (!submissions) {
    const error = new Error("No submissions to display");
    error.status = 404;
    return next(error);
  }

  res.json(submissions);
};

// @desc      Create a contact submission
// @route     POST /api/contactRouter
export const createSubmission = (req, res, next) => {
  const submissions = readJsonFile(contactFile);
  const newSubmission = req.body;

  if (!newSubmission.name || !newSubmission.email || !newSubmission.message) {
    const error = new Error("All fields are required.");
    error.status = 400;
    return next(error);
  }

  submissions.push(newSubmission);
  writeJsonFile(contactFile, submissions);

  res.status(201).json({
    message: "Contact form submitted successfully!",
    data: newSubmission,
  });
};
