import {NoteText} from './NoteText.jsx'
import {NoteImg} from './NoteImg.jsx'

export function DeterminNotesType({notes,loadNotes}){
    const arrangedNotes = notes.map(note =>{
        switch (note.type) {
            case 'NoteText':
            return <NoteText note = {note} loadNotes={loadNotes} />
            case 'NoteImg':
            return <NoteImg  note = {note} loadNotes={loadNotes}/>
            }
    })
    const rows = []
    // debugger

    // for (let i = 0 ; i < arrangedNotes.length; i++) {
    //     // arrangedNotes.push(<div class="col" key={i}/>)
    //     if ((i + 1) % 3 === 0) {
    //         rows.push(
    //             <div className="row" key={i}>
    //                 {arrangedNotes[i-2]} {arrangedNotes[i-1]} {arrangedNotes[i]}
    //             </div>
    //         )
    //         // cols = []
    //     }
    // // }
    // // for(let i =0; i<=arrangedNotes.length;i++){
    // //     if(arrangedNotes[i] %3 === 0 ){
    // //         arrangedNotes.splice(arrangedNotes[i+1],0, <div className = "row"></div>)
    // //         // arrangedNotes.splice(arrangedNotes[i+4],0,)
    // //     }
    // }

    return arrangedNotes
    
    
}