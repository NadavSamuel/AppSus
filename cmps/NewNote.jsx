import { NoteImgAdd } from './NoteImgAdd.jsx'
import { NoteTodosAdd } from './NoteTodosAdd.jsx'
import { NoteService } from '../services/note-service.jsx'
export class NewNote extends React.Component {
    state = {
        id: null,
        type: "NoteText",
        title: 'text',
        txt: "txt",
        url: "url",
        todos:"todos(seperate by comma)"
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
            <div className="new-note=input">
                <select className="note-type-select" id="type" onChange={this.onInputChange}>
                    <option value="NoteText">Text Note</option>
                    <option value="NoteImg">Image Note</option>
                    <option value="NoteTodos">Todos Note</option>
                </select>
                <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.onInputChange}></input>
                <input type="textarea" className="form-control" id="txt" value={this.state.txt} onChange={this.onInputChange}></input>
                {this.state.type === "NoteImg" && <NoteImgAdd url={this.state.url} onInputChange={this.onInputChange} />} 
                {this.state.type === "NoteTodos" && <NoteTodosAdd todos={this.state.todos} onInputChange={this.onInputChange} />} 
                <button onClick={this.onAddNote}>Add
                </button>

            </div>
        )
    }
}