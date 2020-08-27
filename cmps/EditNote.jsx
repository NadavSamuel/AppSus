import {NoteImgAdd} from './NoteImgAdd.jsx'
import {NoteService} from '../services/note-service.js'
export class EditNote extends React.Component {
    state = {
        id: '',
        type:  '',
        title: '',
        txt:'',
        url: ''
    }
    componentDidMount(){
        this.setState({...this.props.note},() => console.log(this.state))
    }
    // componentDidUpdate(){
    //     this.setState({...this.props.note},() => console.log(this.state))

    // }
    onInputChange = (ev) => {
        const value = ev.target.value
        this.setState({ ...this.state,  [ev.target.id]: value})
      }
      onEditNote = () =>{
        // ev.preventDefault();
        NoteService.editNote(this.state.id,{...this.state})
        // this.props.loadNotes()
        // const emptyData = NoteService.getEmpty()
        // this.setState(emptyData)
        this.setState()
        this.props.closeEditModal()
 
      }
    render() {
        return (
            <div>

                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={this.state.title} onChange={this.onInputChange}></input>
                    <input type="text" className="form-control" id="txt" value={this.state.txt} onChange={this.onInputChange}></input>
                    {this.state.type === "NoteImg" && <NoteImgAdd url={this.state.url} onInputChange={this.onInputChange} />}
                    <button data-dismiss="modal" type="submit" className="btn btn-primary" onClick={this.onEditNote}>Edit</button>

                </div>


        )
    }
}