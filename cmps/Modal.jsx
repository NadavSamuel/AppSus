import { NoteService } from '../services/note-service.js'
import { NoteImgAdd } from './NoteImgAdd.jsx'
import { AddNote } from './AddNote.jsx'
import { EditNote } from './EditNote.jsx'
export class Modal extends React.Component {
  state = {
    

  }
  componentDidMount() {
    // const id  = this.props.id
    // if (id) NoteService.getById(id).then(note => this.setState({ note }))
    // // else id = NoteService.makeId().then(id => this.setState({ id }))
    // // this.elInput.current.focus()
    // console.log(this.props)
    // console.log(this.state)
  }

  // onInputChange = (ev) => {

  //   // console.log('Input:', ev.target.name);
  //   // console.log('Changed', ev.target.value);
  //   const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
  //   this.setState({ ...this.state,  [ev.target.id]: value})
  // }
  // onAddNote = (ev) => {
  //   ev.preventDefault();
  //   NoteService.AddNote(this.state)
  //   this.props.loadNotes()
  // }
  // clearEditModal = () =>{
  //   this.setState()

  // }

  render() {
    return (
      // <div>
        /* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          {this.props.modalType === "add" ? "Add note" : "Edit note"}
        </button> */

        /* <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Note</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  {/* <span aria-hidden="true">&times;</span> */
                /* </button> */
              // </div> 
              <div className="modal-wrapper" >
              <div className="modal-content1">
                {/* {this.state.isAddNote && <AddNote loadNotes={this.props.loadNotes} />} */}
                 <EditNote  toggleEditModal={this.props. toggleEditModal} loadNotes={this.props.loadNotes} note={this.props.note} />
                 <button onClick ={this.props.toggleEditModal}>Close</button>


              </div>
              </div>
      //         <div className="modal-footer">
      //           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}
