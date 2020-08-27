import {DeterminNotesType}  from './DeterminNotesType.jsx'

export function DynamicNotes({notes,loadNotes}){

    return (
        <section className=" notes-container">
       <DeterminNotesType notes={notes} loadNotes={loadNotes}/>
      </section>

    )
    
}