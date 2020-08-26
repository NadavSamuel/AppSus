export function NoteText({note}){


    return (
        <article className = "note note-text" key = {note.id}>

            <h2>{note.info.title}</h2>
            <p>{note.info.txt}</p>
        </article>

    )
    
}