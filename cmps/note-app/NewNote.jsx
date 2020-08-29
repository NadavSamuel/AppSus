import { NoteImgAdd } from './NoteImgAdd.jsx'
import { NoteTextAdd } from './NoteTextAdd.jsx'
import { NoteTodosAdd } from './NoteTodosAdd.jsx'
import { NoteService } from '../services/note-service.jsx'
export class NewNote extends React.Component {
    state = {
        id: null,
        type: "NoteText",
        title: '',
        txt: "",
        url: "",
        todos:"",
        isPinned:false
    }
    onInputChange = (ev) => {

        // console.log('Input:', ev.target.name);
        // console.log('Changed', ev.target.value);
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ ...this.state, [ev.target.id]: value })
    }
    onAddNote = (ev) => {
        ev.preventDefault();
        NoteService.addNote(this.state)
        this.props.loadNotes()
    }

    render() {
        return (
            <div className="new-note">
            <div className="new-note-type-select">
                <select  className="note-type-select" id="type" onChange={this.onInputChange}>
                    <option value="NoteText">Text Note</option>
                    <option value="NoteImg">Image Note</option>
                    <option value="NoteTodos">Todos Note</option>
                </select>
                </div>

                <div className="new-note-inputs">
                <input placeholder="title"  type="text" className="form-control title-input" id="title" value={this.state.title} onChange={this.onInputChange}></input>
                {(this.state.type ==="NoteText" || this.state.type ==="NoteImg") &&<NoteTextAdd txt={this.state.txt} onChange={this.onInputChange} />}
                {this.state.type === "NoteImg" && <NoteImgAdd url={this.state.url} onInputChange={this.onInputChange} />} 
                {this.state.type === "NoteTodos" && <NoteTodosAdd todos={this.state.todos} onInputChange={this.onInputChange} />} 
                <button className="add-btn btn btn-success" onClick={this.onAddNote}>Add
                </button>
                
                </div>

            </div>
        )
    }
}