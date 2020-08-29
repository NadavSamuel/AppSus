import {NoteText} from './NoteText.jsx'
import {NoteImg} from './NoteImg.jsx'
import {NoteTodos} from './NoteTodos.jsx'
import {NotesDisplay} from './NotesDisplay.jsx'

export class DeterminNotesType extends React.Component {
    state={
        
    }
    componentDidMount(){
        console.log(this.props)
        }
    // handleUpdate = () =>{
    //      this.forceUpdate(() => console.log(this.arrangeNotes()))
    // }

     arrangeNotes = () =>{
     const arrangedNotes = this.props.notes.map(note =>{
        switch (note.type) {
            case 'NoteText':
                return <NoteText togglePinNote={this.props.togglePinNote} note = {note} loadNotes={this.props.loadNotes} reRender={this.handleUpdate} />
            case 'NoteImg':
            return <NoteImg  note = {note} loadNotes={this.props.loadNotes}/>
            case 'NoteTodos':
                return <NoteTodos  note = {note} loadNotes={this.props.loadNotes}/>
            }   
        })
        return arrangedNotes
    }
        render(){
            const notesForDisplay=(this.arrangeNotes())
        return( 
            <div className="all-notes">
            <NotesDisplay notesToDisplay={notesForDisplay}/>
            </div>
            )
            
        }
            
    }