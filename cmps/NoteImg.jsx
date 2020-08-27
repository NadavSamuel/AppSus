import { DeleteBtn } from './Deletebtn.jsx'
import { Modal } from './Modal.jsx'

export class NoteImg extends React.Component {
    state = {
        isEdit: false
    }
    openEditModal= () =>{
        this.setState({isEdit:true})
    }

    render() {
        const note= this.props.note

        return (

            <article  onClick={this.openEditModal} className="note img-note" key={note.id}>
                <DeleteBtn noteId={note.id} loadNotes={this.props.loadNotes} />
                <h2>{note.info.title}</h2>
                <p>{note.info.txt}</p>
                <img className="img" src={note.info.url}></img>
                {this.state.isEdit&&<Modal note={note} />}

            </article>

        )

    }
}