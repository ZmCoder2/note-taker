const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const db = require('../db/db.json')
const {v4: uuidv4} = require('uuid')

router.get('/notes', (req, res) => {
    res.json(db)
});

router.post("/notes", (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text
    };

    fs.writeFile(path.join(__dirname, "../db/db.json"),
        JSON.stringify(note))
    res.json(true)
});

module.exports = router;