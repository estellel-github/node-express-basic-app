# 📚 Node-Express Basic App

A RESTful API built with **Node.js** and **Express**, leveraging modular routing and local JSON file storage for managing books, authors, and contact submissions.

This is a toy project for learning/practice, as part of The Odin Project Node.js/Express Curriculum.

---

## Features

- **Books API**:

  - Fetch all books, a single book by ID, or reserve a book.
  - Create, update, and delete books dynamically.

- **Authors API**:

  - Retrieve authors or fetch an author by ID.
  - Create, update, and delete authors.

- **Contact API**:

  - Submit contact forms dynamically.
  - View all contact submissions.

- **Static Pages**:
  - Serve HTML pages for Home, About, and Contact sections.

---

## Tools and Technologies

- **Languages**: JavaScript (ES Modules)
- **Framework**: Express.js
- **Storage**: Local JSON file storage
- **Routing**: Modular route handlers
- **Error Handling**: Custom middleware for 404 and generic errors

---

## Practiced

- Modularization and separation of concerns
- RESTful API practice
- File-based data persistence in JSON format
- Middleware and routing techniques.

---

## How to Use

### Prerequisites

Ensure you have Node.js and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd node-express-basic-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser or API client at: http://localhost:3001

---

### Endpoints

#### **Books API**

| Method | Endpoint                 | Description                 |
| ------ | ------------------------ | --------------------------- |
| GET    | `/books`                 | Fetch all books             |
| GET    | `/books/:bookId`         | Fetch a specific book by ID |
| POST   | `/books/:bookId`         | Create a new book           |
| PUT    | `/books/:bookId`         | Update an existing book     |
| DELETE | `/books/:bookId`         | Delete a book               |
| GET    | `/books/:bookId/reserve` | Reserve a book              |

#### **Authors API**

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| GET    | `/authors`           | Fetch all authors             |
| GET    | `/authors/:authorId` | Fetch a specific author by ID |
| POST   | `/authors`           | Create a new author           |
| PUT    | `/authors/:authorId` | Update an existing author     |
| DELETE | `/authors/:authorId` | Delete an author              |

#### **Contact API**

| Method | Endpoint               | Description                  |
| ------ | ---------------------- | ---------------------------- |
| GET    | `/contact/submissions` | View all contact submissions |
| POST   | `/contact`             | Submit a contact form        |

---
