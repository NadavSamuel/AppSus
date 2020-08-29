import { NoteService } from '../services/note-service.js'
import { NoteImgAdd } from './NoteImgAdd.jsx'
import { AddNote } from './AddNote.jsx'
import { EditNote } from './EditNote.jsx'
export class Modal extends React.Component {





  render() {
    return (

      <div className="modal-wrapper" >
        <div className="modal-content1">

          <EditNote toggleEditModal={this.props.toggleEditModal} loadNotes={this.props.loadNotes} note={this.props.note} />
          


        </div>
      </div>

    )
  }
}
