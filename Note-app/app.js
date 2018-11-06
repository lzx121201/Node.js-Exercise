console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleConfig = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyConfig = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs.command('add', 'Add a new note', {
    title: titleConfig,
    body: bodyConfig
})
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleConfig
    })
    .command('remove', 'Remove a note', {
        title: titleConfig
    })
    .help()
    .argv;

var command = argv._[0];
// console.log(argv);

if (command === 'add') {
    console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note created.');
        notes.printNote(note);
    } else {
        console.log('Title already taken.');
    }
}
else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => {
        notes.printNote(note);
    });
}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found.');
        notes.printNote(note);
    } else {
        console.log('Note not found.');
    }
}
else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note Removed.' : 'Note not found';
    console.log(message);
}
else {
    console.log('Command not recognized.');
}





// console.log(user);
// fs.appendFile('greeting.txt',`Hello ${user.username}! You are ${notes.age}`,'utf8',(err)=>{
//     if(err) throw err;
//     console.log('Something is wrong!');
// });