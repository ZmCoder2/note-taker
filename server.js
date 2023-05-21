const express = require('express');
const path = require('path');
const dataBase = require('./db/db.json');
const fs = require('fs');
const { response } = require('express');
const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/api/notes', (req, res) => {
    console.info(`GET /api/notes`);
    res.status(200).json(noteList)
});

