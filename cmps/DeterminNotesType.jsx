import {NoteText} from './NoteText.jsx'
import {NoteImg} from './NoteImg.jsx'
import {NoteTodos} from './NoteTodos.jsx'

export function DeterminNotesType({notes,loadNotes}){
    const arrangedNotes = notes.map(note =>{
        switch (note.type) {
            case 'NoteText':
            return <NoteText note = {note} loadNotes={loadNotes} />
            case 'NoteImg':
            return <NoteImg  note = {note} loadNotes={loadNotes}/>
            case 'NoteTodos':
            return <NoteTodos  note = {note} loadNotes={loadNotes}/>
            }
             const pinnedNotes = arrangedNotes.filter(note =>{
                 return note.isPinned
             })
    })


    return( 
        arrangedNotes

    )
    
    
}