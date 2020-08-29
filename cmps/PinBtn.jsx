export function PinBtn({noteId,togglePinNote}) {
    // console.log(noteId,togglePinNote)
    // const noteId = this.props.noteId
    return (
        <button onClick={() =>togglePinNote(noteId,event)}>pin/unpin</button>
    )
}