import {DeterminNotesType}  from './DeterminNotesType.jsx'
// import {NewNote} from '../cmps/NewNote.jsx'

export function DynamicNotes({notes,loadNotes,togglePinNote}){

    return (
        <section >
       <DeterminNotesType togglePinNote={togglePinNote} notes={notes} loadNotes={loadNotes}/>
      </section>

    )
    
}