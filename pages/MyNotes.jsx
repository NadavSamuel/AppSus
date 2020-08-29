import { NoteService } from '../services/note-service.js'
import { DynamicNotes } from '../cmps/DynamicNotes.jsx'
import { Modal } from '../cmps/Modal.jsx'
import { NewNote } from '../cmps/NewNote.jsx'
import { FilterNotes } from '../cmps/FilterNotes.jsx'
import { PinnedNotes } from '../cmps/NotesDisplay.jsx'


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
                this.setState({ notes: this.filterNotes(notes, filterValue), filter: filterValue }, () => console.log(notes))
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
                <NewNote loadNotes={this.loadNotes} />
                <FilterNotes changeFilter={this.onChangeFilter} />
                <DynamicNotes togglePinNote={this.togglePinNote} loadNotes={this.loadNotes} notes={this.state.notes} addNote={this.state.isAddNote} />


            </section>
        )
    }
}


