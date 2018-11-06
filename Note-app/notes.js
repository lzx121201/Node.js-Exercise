console.log('Starting Notes.js');
const fs = require('fs');

var fetchNotes = () => {
    var notes = [];
    try {
        var notesString = fs.readFileSync('note-data.json');
        notes = JSON.parse(notesString);
    } catch (error) {
        console.log('Something goes wrong. Note not added.');
    }
    return notes;
};

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

var filterNotes = (notes, title, flag) => {
    var filteredNotes = notes.filter((note) => (note.title === title) === flag);
    return filteredNotes;
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = filterNotes(notes, title, true);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes.');
    return fetchNotes();
};

var getNote = (title) => {
    console.log(`Fetching note: ${title}`);
    var notes = fetchNotes();
    var filteredNotes = filterNotes(notes, title, true);
    return filteredNotes[0];
};

var removeNote = (title) => {
    console.log(`Removing note: ${title}`);
    var notes = fetchNotes();
    // var filteredNotes = notes.filter((note) => note.title !== title);
    var filteredNotes = filterNotes(notes, title, false);
    saveNotes(filteredNotes);
    return filteredNotes.length !== notes.length;
};

var printNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    printNote
};