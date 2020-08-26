import {NoteText} from './NoteText.jsx'
import {NoteImg} from './NoteImg.jsx'

export function DeterminNotesType({notes}){
    const arrangedNotes = notes.map(note =>{
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
    
    return <section className = "row">
    {arrangedNotes}
    </section>
}