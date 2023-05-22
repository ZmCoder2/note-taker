// retrieved this code from Activity 24 of module 11

const fs = require("fs");

const util = require("util");

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// Writes to the file
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

  // parses the data to be stored in the db.json file
const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const readAndDelete = (id, file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter((note) => {
          return note.id !== id;
        });
        writeToFile(file, filteredData);
      }
    });
  };
  
  module.exports = { readFromFile, writeToFile, readAndAppend, readAndDelete };