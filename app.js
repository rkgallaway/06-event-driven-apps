'use strict';

const fs = require('fs');
const events = require('events');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const file = module.exports = exports = {};

file.loadFile = (file) => readFile(file);
file.saveFile = (file, buffer) => writeFile(file, buffer);

file.convertBuffer = buffer => buffer.from(buffer.toString().trim().toUpperCase());

file.alterFile = incomingFile =>
  file.loadFile(incomingFile)
    .then( contents => file.convertBuffer(contents) )
    .then( buffer => file.saveFile(incomingFile.buffer) )
    .then( () => {events.emit('file-save', incomingFile); return true;})
    .catch( error => error.emit('file-error', error));

// const alterFile = (file) => {
//   readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     return text;
//   }).then (text => {
//     fs.writeFile( file, text.toString().toUpperCase(), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   })
//     .catch(err => events.emit('error', handleError));
// };

// function handleError(error){
//   events.on('error', error);
// }


// let file = process.argv.slice(2).shift();
// alterFile(file);
