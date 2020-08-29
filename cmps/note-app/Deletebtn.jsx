import {NoteService} from '../services/note-service.js'
// import {MyNotes} from '../pages/MyNotes.jsx'
export function DeleteBtn({noteId,loadNotes}){
   function  onDeleteNote(){
    NoteService.deleteNote(noteId)
    loadNotes()

   }

    return(
        <button className="btn-danger delete-btn" onClick={onDeleteNote}><i className="fa fa-trash"></i></button>
    )
}