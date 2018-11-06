// var obj = {
//     name: 'Kyle'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));

// console.log(stringObj);

// var stringPerson = '{"name":"Kyle", "age":"22"}';
// var objPerson = JSON.parse(stringPerson);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof(note));

console.log(note.title);
