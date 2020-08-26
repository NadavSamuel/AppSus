import { NoteService } from '../services/note-service.js'
import { DynamicNotes } from '../cmps/DynamicNotes.jsx'

export class MyNotes extends React.Component {
    state = {
        notes: []
    }
    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        NoteService.query()
            .then(notes => {
                // console.log(notes)
                this.setState({ notes: notes })
            })
    }
    render() {
        return (
            <section className="text-white">
                <h1>MyNotes!</h1>
                <DynamicNotes notes={this.state.notes}/>

            </section>
        )
    }
}


