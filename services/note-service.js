
export const NoteService = {
    query,
    // save,
    // getEmpty,
    removeNote,
    getById

}
var notes = [
    {
        id : makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            title:'Yeah!!!',
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id : makeId(),
        type: "NoteImg",
        info: {
            url: '../assets/imgs/keypeele.gif',
            title: "Me playing Mi",
            txt: "Fullstack at night, Fullstuck at day"

        },
        style: {
            backgroundColor: "#00d"
        }
        
    }]
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







    /////////////////////////////////////////////////////////
    function makeId(length = 5) {
        var txt = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }