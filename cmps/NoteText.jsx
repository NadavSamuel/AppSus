export function NoteText({note}){


    return (
        <article className = "col-sm-3 text-center card bg-white text-dark mr-3" key = {note.id}>

            <h2>{note.info.title}</h2>
            <p>{note.info.txt}</p>
        </article>

    )
    
}