export function NotesDisplay({ notesToDisplay }) {
    console.log(notesToDisplay)
    const pinnedNotes = notesToDisplay.filter(note => {
        return note.props.note.isPinned
    })

    return (
        // <div className="notes-container">
        // <div className="pinned-notes">
        //     {pinnedNotes}
        // </div>
        <div className="notes-container">
        {notesToDisplay}
        </div>
        // </div>
    )


}