#  Notes API

A simple and efficient RESTful API for managing notes, built with *Node.js, **Express.js, and **MongoDB*. 

---

## Features

-  *Create Note* – Add new notes with a title and content
-  *Get All Notes* – Fetch all stored notes
-  *Get Note by ID* – Retrieve a specific note by its MongoDB ID
-  *Update Note* – Update title and content of a note

---

##  Tech Stack

- *Node.js*
- *Express.js*
- *MongoDB* with *Mongoose*
- *dotenv* for environment variable management

---

##  Project Structure


project-root/
│
├── config/
│   └── database.js           # MongoDB connection logic
│
├── controller/
│   ├── createNote.js         # Controller to create a note
│   ├── getNotes.js           # Controllers to get notes and by ID
│   └── updateNotes.js        # Controller to update a note
│
├── models/
│   └── Note.js               # Mongoose schema for notes
│
├── routes/
│   └── notes.js              # All note-related routes
│
├── .env                      # Environment variables (e.g., MONGO_URL)
├── .gitignore                # Node-related ignores
├── package.json              # Project metadata and dependencies
├── app.js                    # Main server file
└── README.md                 # You're here!



   

---

##  API Endpoints

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| GET    | /                | Test if API is working  |
| GET    | /api/working     | Route test              |
| POST   | /api/notes       | Create a new note       |
| GET    | /api/notes       | Get all notes           |
| GET    | /api/notesid/:id | Get a single note by ID |
| GET    | /api/update      | Update a note           |

> Note: Updating via GET is non-standard REST practice. Use PUT or PATCH instead in production.

---

##  Example Note Object

json
{
  "title": "My First Note",
  "content": "This is the content of the note"
}

