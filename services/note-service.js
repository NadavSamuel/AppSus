
export const NoteService = {
    query,
    // save,
    // getEmpty,
    removeNote,
    getById,
    addNote,
    deleteNote,
    editNote,
    getEmpty

}
var notes = getNotes() || [
    {
        id: makeId(),
        type: "NoteText",
        isPinned: false,
        info: {
            title: 'Yeah!!!',
            txt: "Three days after the curfew was lifted, it was cleaffee, not getting an unexpected and unwanted hug on the street from someone you took a yoga class with. The government allowed a few more days to adapt, but when it became obvious that things"
        }
    },
    {
        id: makeId(),
        type: "NoteImg",
        isPinned: true,

        info: {
            url: '../assets/imgs/keypeele.gif',
            title: "Me playing Mi",
            txt: "Fullstack at night, Fullstuck at day"

        },
        style: {
            backgroundColor: "#00d"
        }

    },
    {
        id: makeId(),
        type: "NoteTodos",

        info: {
            title: "things to do after the sprint",
            todos: "eat sabih, avoid corona, love popo by heart"

        },
        style: {
            backgroundColor: "#00d"
        }

    }
]
function query() {
    return Promise.resolve(notes)
}
function removeNote(noteId) {
    notes = notes.filter(note => note.id !== noteId)
}
function getById(noteId) {
    const note = notes.find(note => note.id === noteId)
    return Promise.resolve(note)
}

// function getEmpty() {
//     return { name: '', power: 0 };
// }
function createNote(noteDetails) {
    return {
        id: makeId(),
        type: noteDetails.type,
        info: {
            ...noteDetails
        }


    }

}
function addNote(noteDetails) {
    const note = createNote(noteDetails)
    // let todos =  note.info.todos
    // if(todos) todos = todos.split(',')
    notes.push(note)
    saveNotes()
    return Promise.resolve('note added')

}
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes))
}

function editNote(noteId, newNoteInfo) {
    let noteToEdit = notes.find(note => note.id === noteId)
    console.log('note to edit:', noteToEdit)
    noteToEdit.info = { ...newNoteInfo }
    saveNotes()
    return Promise.resolve('note edited')
}

function getNotes() {
    var val = localStorage.getItem('notes')
    return JSON.parse(val)
}
function deleteNote(noteId) {
    notes = notes.filter(notes => notes.id !== noteId)
    saveNotes()
}

function getEmpty() {
    return {
        id: '',
        type: '',
        title: '',
        txt: '',
        url: ''
    }
}







/////////////////////////////////////////////////////////
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}