import {DeleteBtn} from './Deletebtn.jsx'

export function NoteImg({note,loadNotes}){


    return (
        <article className = "note img-note" key = {note.id}>
            <DeleteBtn noteId= {note.id} loadNotes={loadNotes}/>
            <h2>{note.info.title}</h2>
            <p>{note.info.txt}</p>
            <img className="img" src={note.info.url}></img>
        </article>

    )
    
}