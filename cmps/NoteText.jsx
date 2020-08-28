import { DeleteBtn } from './Deletebtn.jsx'
import { Modal } from './Modal.jsx'
export class NoteText extends React.Component {
    state={
        isEdit:false
    }
    openEditModal= () =>{
        if(this.state.isEdit) return
        this.setState({isEdit:true})
    }
    toggleEditModal= (ev) =>{
        ev.stopPropagation()
        console.log(this.state.isEdit)
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
                {this.state.isEdit&&<Modal note={note}   toggleEditModal={this.toggleEditModal} />}
            </article>

        )

    }
}