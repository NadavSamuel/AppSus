export function NoteImg({note}){


    return (
        <article className = "note note-img" key = {note.id}>

            <h2>{note.info.title}</h2>
            <p>{note.info.txt}</p>
            <img src={note.info.url}></img>
        </article>

    )
    
}