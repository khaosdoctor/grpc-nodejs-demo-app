const grpc = require('grpc')
const NotesDefinition = grpc.load(require('path').resolve('../proto/notes.proto'))

const notes = [
  { id: '1', title: 'Note 1', description: 'Content 1' },
  { id: '2', title: 'Note 2', description: 'Content 2' }
]

function List (_, callback) {
  return callback(null, notes)
}

function Find ({ request: { id } }, callback) {
  return callback(null, notes.find((note) => note.id === id))
}

const server = new grpc.Server()
server.addService(NotesDefinition.NoteService.service, { List, Find })

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
server.start()
