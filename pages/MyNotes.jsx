import { NoteService } from '../services/note-service.js'
import { Notes } from '../cmps/Notes.jsx'

export class MyNotes extends React.Component {
    state = {
        notesToDisplay: []
    }
    componentDidMount() {
        this.getNotesToDisplay()
    }

    getNotesToDisplay = () => {
        NoteService.query()
            .then(notes => {
                // console.log(notes)
                this.setState({ notesToDisplay: notes })
            })
    }
    render() {
        return (
            <section className="text-white">
                <h1>MyNotes!</h1>
                <Notes notesForDisplay={this.state.notesToDisplay}/>

            </section>
        )
    }
}


