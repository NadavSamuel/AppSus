export function NoteImgAdd({url,onInputChange}){
    return(
        <div className="form-group">

        <label forhtml="txt">Enter text</label>
        <input type="text" className="form-control" id="url" value={url} onChange={onInputChange} ></input>
        
        </div>
    )
}