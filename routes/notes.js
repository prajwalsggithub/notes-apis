
const express = require('express');
const notesRouter = express.Router();
const { createNote } = require('../controller/createNote');
const { getAllNotes, getAllNotesById } = require('../controller/getNotes');
const {updateNotes} = require('../controller/updateNotes');

// Test route
notesRouter.get('/working', (req, res) => {
  res.status(200).send('Notes Home');
});

// Notes routes
notesRouter.post('/notes', createNote);
notesRouter.get('/notes', getAllNotes);
notesRouter.get('/notesid/:id', getAllNotesById);
notesRouter.get('/update', updateNotes);

module.exports = notesRouter;
