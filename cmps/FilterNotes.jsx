export function FilterNotes({changeFilter}){

    return(
        <div className="filter-btns">
            <button onClick={() =>{changeFilter('all')}}>All notes</button>
            <button onClick={() =>{changeFilter('NoteText')}}>Text notes</button>
            <button onClick={() =>{changeFilter('NoteImg')}}>Image notes</button>
            <button onClick={() =>{changeFilter('NoteTodos')}}>Toto notes</button>

        </div>
    )

}