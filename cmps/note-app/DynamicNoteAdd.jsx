import {NoteTextAdd} from './NoteTextAdd.jsx'
import {NoteImgAdd} from './NoteImgAdd.jsx'

export function DynamicNoteAdd({noteType}){
let formType = ''
        switch (noteType) {
            case 'NoteText':
            formType = <NoteTextAdd/>
            return 
            case 'NoteImg':
            formType =<NoteImgAdd/>
            return 
            // case 'WelcomeBack':
            // return <WelcomeBack {...props} />
            // default:
            // return //...some default error view
            }
    
    
    return <section>
    {formType}
    </section>
}