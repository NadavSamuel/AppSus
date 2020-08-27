import {DeterminNotesType}  from './DeterminNotesType.jsx'
// import {NewNote} from '../cmps/NewNote.jsx'

export function DynamicNotes({notes,loadNotes,addNote}){

    return (
        <section className= "notes-container">
       <DeterminNotesType notes={notes} loadNotes={loadNotes}/>
      </section>

    )
    
}