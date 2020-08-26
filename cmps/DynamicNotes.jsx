import {DeterminNotesType}  from './DeterminNotesType.jsx'

export function DynamicNotes({notes}){

    return (
        <section className="container">
       <DeterminNotesType notes={notes} />
      </section>

    )
    
}