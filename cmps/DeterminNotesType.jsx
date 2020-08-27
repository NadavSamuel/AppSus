import {NoteText} from './NoteText.jsx'
import {NoteImg} from './NoteImg.jsx'

export function DeterminNotesType({notes,loadNotes}){
    const arrangedNotes = notes.map(note =>{
        switch (note.type) {
            case 'NoteText':
            return <NoteText note = {note} loadNotes={loadNotes} />
            case 'NoteImg':
            return <NoteImg  note = {note} loadNotes={loadNotes}/>
            }
    })


    return arrangedNotes
    
    
}