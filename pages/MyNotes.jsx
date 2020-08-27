import { NoteService } from '../services/note-service.js'
import { DynamicNotes } from '../cmps/DynamicNotes.jsx'
import { Modal } from '../cmps/Modal.jsx'
import {NewNote} from '../cmps/NewNote.jsx'


export class MyNotes extends React.Component {
    state = {
        notes: [],
        isAddNote: false
    }
    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        NoteService.query()
            .then(notes => {
                // console.log(notes)
                this.setState({ notes })
            })
    }
    // openAddNote = () => {
    //     // console.log('hi')
    //     this.setState({ isAddNoteOpen: true }, ()  => console.log(this.state))
    // }
    onEditNote = () => {

    }
    onAddNote = () =>{
        this.setState({isAddNote:true}, () => console.log(this.state.isAddNote))
    }

    render() {
        return (
            <section className="text-white">
       
                {/* <Modal loadNotes={this.loadNotes} modalType="add" /> */}
                <h1 className="text-center background-headline">MyNotes!</h1>
                <NewNote loadNotes={this.loadNotes}/>
                <DynamicNotes loadNotes={this.loadNotes} notes={this.state.notes} addNote={this.state.isAddNote} />
                

            </section>
        )
    }
}


