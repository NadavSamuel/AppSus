
export function NoteTextAdd({txt,onInputChange}){


    return (
        <div className="form-group">

        <input placeholder="text" type="text" className="form-control" id="txt" value={txt} onChange={onInputChange} ></input>
        
        </div>
)
}