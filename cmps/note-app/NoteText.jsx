import { DeleteBtn } from './Deletebtn.jsx'
import { Modal } from './Modal.jsx'
import {PinBtn} from './PinBtn.jsx'
export class NoteText extends React.Component {
    state={
        isEdit:false,
        isPinned:this.props.note.isPinned,
        bcgColor:'#292b2c'
    }
    openEditModal= () =>{
        if(this.state.isEdit) return
        this.setState({isEdit:true})
    }
    toggleEditModal= (ev) =>{
        ev.stopPropagation()
        this.setState({isEdit:false})
    }
    // pinNote= () =>{
    //     this.setState({isPinned:!this.state.isPinned})
    //     console.log(this.state)
    //     // this.props.reRender()
    //     this.props.loadNotes()

        
    // }
    changeBcgColor = (ev) =>{
        ev.stopPropagation()
        console.log(ev)
        this.setState({bcgColor:ev.target.value})


    }


    render() {
        const bcgColor = {
            backgroundColor:this.state.bcgColor
        }
        const note= this.props.note
        return (
            <article style={bcgColor} onClick={this.openEditModal} className="note text-note" key={note.id}>
                <DeleteBtn noteId={note.id} loadNotes={this.props.loadNotes} />
                {/* <PinBtn togglePinNote={this.props.togglePinNote} noteId={note.id} ></PinBtn> */}
                <h2>{note.info.title}</h2>
                <p>{note.info.txt}</p>
                {this.state.isEdit&&<Modal note={note}   toggleEditModal={this.toggleEditModal} />}
                
                   </article>

        )

    }
        //    onChange={() =>{this.changeBcgColor(event)}}></input>   
}