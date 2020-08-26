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

  }




  render(){
    return (
      <div>
        <button type="button" className="btn btn-light btn-large" data-toggle="modal" data-target="#add-modal">Launch demo modal</button>

          <div className="modal " id="add-modal"  tabIndex="-1" role="dialog" >
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
  <button type="submit" className="btn btn-primary" onClick={this.onAddNote}>Submit</button>

  </div>
      

            </form>
              </div>
       </div>
       )
}}