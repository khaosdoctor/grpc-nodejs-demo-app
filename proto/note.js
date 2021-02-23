const definitions = require('./notes_pb')

const note = new definitions.Note()
note.setId(require('crypto').randomBytes(16).toString('hex'))
note.setTitle('Title')
note.setDescription('desc')

console.log(`[DEBUG]  ---------------------------------------------`)
console.log(`[DEBUG]  ~ file: note.js ~ line 7 ~ note`, note)
console.log(`[DEBUG]  ---------------------------------------------`)


const serializedNote = note.serializeBinary()
console.log(`[DEBUG]  ------------------------------------------------------------------`)
console.log(`[DEBUG]  ~ file: note.js ~ line 14 ~ serializedNote`, serializedNote)
console.log(`[DEBUG]  ------------------------------------------------------------------`)

const receivedNote = definitions.Note.deserializeBinary(serializedNote)
console.log(`[DEBUG]  --------------------------------------------------------------`)
console.log(`[DEBUG]  ~ file: note.js ~ line 19 ~ receivedNote`, receivedNote)
console.log(`[DEBUG]  --------------------------------------------------------------`)





const noteList = new definitions.NoteList()
noteList.addNotes(note)
console.log(`[DEBUG]  ------------------------------------------------------`)
console.log(`[DEBUG]  ~ file: note.js ~ line 24 ~ noteList`, noteList)
console.log(`[DEBUG]  ------------------------------------------------------`)

const serializedNoteList = noteList.serializeBinary()
console.log(`[DEBUG]  --------------------------------------------------------------------------`)
console.log(`[DEBUG]  ~ file: note.js ~ line 30 ~ serializedNoteList`, serializedNoteList)
console.log(`[DEBUG]  --------------------------------------------------------------------------`)

const receivedList = definitions.NoteList.deserializeBinary(serializedNoteList)
console.log(`[DEBUG]  --------------------------------------------------------------`)
console.log(`[DEBUG]  ~ file: note.js ~ line 35 ~ receivedList`, receivedList)
console.log(`[DEBUG]  --------------------------------------------------------------`)

for (const note of receivedList.getNotesList()) {
  console.log(`Logging note ID: ${note.getId()}: ${note.getTitle()} [${note.getDescription()}]`)
}
