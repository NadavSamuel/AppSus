export function NotesDisplay({ notesToDisplay }) {
    // console.log(notesToDisplay)
    const pinnedNotes = notesToDisplay.filter(note => {
        return note.props.note.isPinned
    })
    const containerStyle = {
        minWidth:"95%" ,
        display: "grid" ,
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" ,
        gap:"30px",
        margin:"10px"
    }

    return (
        // <div className="notes-container">
        // <div className="pinned-notes">
        //     {pinnedNotes}
        // </div>
        <div className="notes-container" style={containerStyle}>
        {notesToDisplay}
        </div>
        // </div>
    )


}