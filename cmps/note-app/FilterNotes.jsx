export function FilterNotes({changeFilter}){

    return(
        <div className="filter-btns-container">
            <div className="filter-btns">
            <button className="btn-primary" onClick={() =>{changeFilter('all')}}>All notes</button>
            <button className="btn-primary" onClick={() =>{changeFilter('NoteText')}}>Text notes</button>
            <button className="btn-primary" onClick={() =>{changeFilter('NoteImg')}}>Image notes</button>
            <button className="btn-primary" onClick={() =>{changeFilter('NoteTodos')}}>Todo notes</button>
            </div>
        </div>
    )

}