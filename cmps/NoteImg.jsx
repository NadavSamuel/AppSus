export function NoteImg({note}){


    return (
        <article className = "col-sm-5 text-center card bg-white text-dark mr-3" key = {note.id}>

            <h2>{note.info.title}</h2>
            <p>{note.info.txt}</p>
            <img src={note.info.url}></img>
        </article>

    )
    
}