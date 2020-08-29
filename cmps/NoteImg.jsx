import { DeleteBtn } from './Deletebtn.jsx'
import { Modal } from './Modal.jsx'

export class NoteImg extends React.Component {
    state = {
        isEdit: false,
        isPinned:this.props.note.isPinned

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

            <article  onClick={this.openEditModal} className="note img-note" key={note.id}>
                <DeleteBtn noteId={note.id} loadNotes={this.props.loadNotes} />
                <h2>{note.info.title}</h2>
                <p>{note.info.txt}</p>
                <img className="img" src={note.info.url}></img>
                {this.state.isEdit&&<Modal toggleEditModal={this.toggleEditModal} note={note}  />}
            </article>

        )

    }
}