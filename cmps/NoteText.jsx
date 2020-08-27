import {DeleteBtn} from './Deletebtn.jsx'
export function NoteText({note,loadNotes}){


    return (
        <article className = "note text-note" key = {note.id}>
            <DeleteBtn noteId= {note.id} loadNotes={loadNotes}/>

            <h2>{note.info.title}</h2>
            <p>{note.info.txt}</p>
        </article>

    )
    
}