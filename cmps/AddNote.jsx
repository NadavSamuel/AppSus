import {NoteImgAdd} from './NoteImgAdd.jsx'
import {NoteService} from '../services/note-service.jsx'
export class AddNote extends React.Component {
    state = {
        id: null,
        type: "NoteText",
        title: 'text',
        txt: "txt",
        url: "url"
    }
    onInputChange = (ev) => {
    
        // console.log('Input:', ev.target.name);
        // console.log('Changed', ev.target.value);
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ ...this.state,  [ev.target.id]: value})
      }
      onAddNote = (ev) =>{
        ev.preventDefault();
        NoteService.AddNote(this.state)
        this.props.loadNotes()
    
    
      }
    render() {
        return (
            <form>
                <div className="form-group">
                    <select className="note-type-select" id="type" onChange={this.onInputChange}>
                        <option value="NoteText">Text Note</option>
                        <option value="NoteImg">Image Note</option>
                    </select>
                </div>
                <div className="form-group">
                    <label forhtml="title">Enter title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={this.state.title} onChange={this.onInputChange}></input>
                </div>
                <div className="form-group">
                    <label forhtml="txt">Enter text</label>
                    <input type="text" className="form-control" id="txt" value={this.state.txt} onChange={this.onInputChange}></input>
                    {this.state.type === "NoteImg" && <NoteImgAdd url={this.state.url} onInputChange={this.onInputChange} />}
                    <button data-dismiss="modal" type="submit" className="btn btn-primary" onClick={this.onAddNote}>Submit</button>

                </div>


            </form>
        )
    }
}