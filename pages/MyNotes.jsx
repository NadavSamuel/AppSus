import { NoteService } from '../services/note-service.js'
import { DynamicNotes } from '../cmps/note-app/DynamicNotes.jsx'
import { Modal } from '../cmps/note-app/Modal.jsx'
import { NewNote } from '../cmps/note-app/NewNote.jsx'
import { FilterNotes } from '../cmps/note-app/FilterNotes.jsx'
import { PinnedNotes } from '../cmps/note-app/NotesDisplay.jsx'


export class MyNotes extends React.Component {
    state = {
        notes: [],
        isAddNote: false,
        filter: 'all'
    }
    componentDidMount() {
        this.loadNotes('all')
    }

    loadNotes = (filterValue = this.state.filter) => {
        NoteService.query()
            .then(notes => {
                this.setState({ notes: this.filterNotes(notes, filterValue), filter: filterValue })
            })
    }
    // togglePinNote = (noteId, ev) => {
    //     debugger
    //     ev.stopPropagation()
    //     const currNote = this.state.notes.filter(note =>{
    //         return note.id === noteId
    //     })
    //     currNote.isPinned = !currNote.isPinned
    //     const notes = [...this.state.notes];
    //     currNote.isPinned = !currNote.isPinned
    //     const noteIdx = notes.findIndex(note => {
    //         return note.id === noteId
    //     })
    //     notes[noteIdx] = currNote;
    //     this.setState({ notes });
    // }



    onAddNote = () => {
        this.setState({ isAddNote: true }, () => console.log(this.state.isAddNote))
    }
    onChangeFilter = value => {
        this.loadNotes(value)
    }
    filterNotes = (notesList, value) => {
        const notesFilter = value
        let notesToDisplay = []
        if (notesFilter === 'all') {
            notesToDisplay = notesList
            return notesToDisplay
        }
        notesToDisplay = notesList.filter(note => {
            return note.type === notesFilter
        })
        return notesToDisplay
    }

    render() {
        return (
            <section className="text-white">

                <h1 className="text-center background-headline">MyNotes!</h1>
                <section className="new-note-container">
                <NewNote loadNotes={this.loadNotes} />
                </section>
                <FilterNotes changeFilter={this.onChangeFilter} />
                <DynamicNotes togglePinNote={this.togglePinNote} loadNotes={this.loadNotes} notes={this.state.notes} addNote={this.state.isAddNote} />


            </section>
        )
    }
}


