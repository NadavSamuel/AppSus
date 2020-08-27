import { DeleteBtn } from './Deletebtn.jsx'
import { Modal } from './Modal.jsx'
export class NoteText extends React.Component {
    state={
        isEdit:false
    }
    openEditModal= () =>{
        this.setState({isEdit:true})
    }
    closeEditModal= () =>{
        this.setState({isEdit:false})
    }
   


    render() {
        const note= this.props.note
        return (
            <article onClick={this.openEditModal} className="note text-note" key={note.id}>
                <DeleteBtn noteId={note.id} loadNotes={this.props.loadNotes} />
                <h2>{note.info.title}</h2>
                <p>{note.info.txt}</p>
                {/* <button onClick={this.openEditModal}>Edit</button> */}
                {this.state.isEdit&&<Modal note={note} closeEditModal={this.closeEditModal} />}
            </article>

        )

    }
}