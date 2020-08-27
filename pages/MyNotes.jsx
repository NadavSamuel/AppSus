import { NoteService } from '../services/note-service.js'
import { DynamicNotes } from '../cmps/DynamicNotes.jsx'
import { AddNote } from '../cmps/AddNote.jsx'

export class MyNotes extends React.Component {
    state = {
        notes: [],
        // isAddNoteOpen:false
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
    openAddNote = () =>{
        console.log('hi')
        this.setState({isAddNoteOpen:true})
    }

    render() {
        return (
            <section className="text-white">

                {/* {this.state.isAddNoteOpen &&<AddNote/>} */}
                <AddNote loadNotes={this.loadNotes}/>
                <h1 className="text-center background-headline">MyNotes!</h1>
                <DynamicNotes loadNotes={this.loadNotes} notes={this.state.notes}/>

            </section>
        )
    }
}


