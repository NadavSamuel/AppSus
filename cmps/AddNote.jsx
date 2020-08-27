import { NoteService } from '../services/note-service.js'
import {NoteImgAdd} from './NoteImgAdd.jsx'

export class AddNote extends React.Component {
  state = {
    type: "NoteText",
    title: 'text',
    txt:"txt",
    url:"url"

  }
  onInputChange = (ev) => {
    
    // console.log('Input:', ev.target.name);
    // console.log('Changed', ev.target.value);
    const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
    this.setState({ ...this.state,  [ev.target.id]: value})
  }
  onAddNote = (ev) =>{
    // debugger
    ev.preventDefault();
    NoteService.AddNote(this.state)
    this.props.loadNotes()
    // $('#button').submit(function(e) {
    //   e.preventDefault();
      // Coding
      // $('#add-modal').modal('toggle'); 
      // return false;
  

  }

  render(){
    return (
      <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
<div className="form-group">
<select className="note-type-select"  id="type" onChange={this.onInputChange}>
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
{this.state.type ==="NoteImg" && <NoteImgAdd url={this.state.url} onInputChange={this.onInputChange}/>}
<button data-dismiss="modal" type="submit" className="btn btn-primary" onClick={this.onAddNote}>Submit</button>

</div>


</form> 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )}}
