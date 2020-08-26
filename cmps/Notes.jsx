import {NoteText} from './NoteText.jsx'
import {NoteImg} from './NoteImg.jsx'

export function Notes({notesForDisplay}){

    function determinNotesType(notesForDisplay){
        const notes = notesForDisplay.map(note =>{
            switch (note.type) {
                case 'NoteText':
                return <NoteText note = {note} />
                case 'NoteImg':
                return <NoteImg  note = {note} />
                // case 'WelcomeBack':
                // return <WelcomeBack {...props} />
                // default:
                // return //...some default error view
                }
        })
        return notes
    }

    return (
        determinNotesType(notesForDisplay)
        

    )
    
}