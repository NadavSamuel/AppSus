import {NoteImgAdd} from './NoteImgAdd.jsx'
import {NoteService} from '../services/note-service.js'
export class EditNote extends React.Component {
    state = {
        id: this.props.note.id,
        type: this.props.note.type,
        title: this.props.note.info.title,
        txt:this.props.note.info.txt,
        url: this.props.note.info.url
    }
    componentDidMount(){
        // this.setState({...this.props.note},() => console.log(this.props))
    }
    // componentDidUpdate(){
    //     this.setState({...this.props.note},() => console.log(this.state))

    // }
    onInputChange = (ev) => {
        const value = ev.target.value
        this.setState({ ...this.state,  [ev.target.id]: value})
      }
      onEditNote = ev =>{
        // ev.preventDefault();
        NoteService.editNote(this.state.id,{...this.state})
        // this.props.loadNotes()
        // const emptyData = NoteService.getEmpty()
        // this.setState(emptyData)
        this.setState()
        // console.log(this.props.closeEditModal())
        ev.stopPropagation()
        this.props.toggleEditModal(ev)
 
      }
    render() {
        return (
            <div className ="modal-content-inside">
                <div className="modal-inputs">
                    <input type="text" className="form-control" id="title" placeholder="title"  value={this.state.title} onChange={this.onInputChange}></input>
                    <input type="text" className="form-control" placeholder="text" id="txt" value={this.state.txt} onChange={this.onInputChange}></input>
                    {this.state.type === "NoteImg" && <NoteImgAdd url={this.state.url} onInputChange={this.onInputChange} />}
                    </div>
                    <div className="modal-btns">
                    <button className="btn btn-primary" onClick={ ()=>{this.onEditNote(event)}}>Edit</button>
                    <button onClick={this.props.toggleEditModal}>Close</button>
                    </div>

                </div>


        )
    }
}