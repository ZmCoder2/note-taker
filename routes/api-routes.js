// api routes
const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const { readFromFile, readAndAppend, readAndDelete } = require('../utils/helper')

// gets the data from the users notes and stores in the db.json file
router.get('/notes', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
});

// saving the data
router.post("/notes", (req, res) => {
    const noteToAdd = req.body;
    noteToAdd.id = uuidv4()
    readAndAppend(noteToAdd, "./db/db.json");
    res.json(noteToAdd)
});

// for the delete button to work
router.delete("/notes/:id", (req, res) => {
    readAndDelete(req.params.id, "./db/db.json");
    res.json(true)
});

module.exports = router;