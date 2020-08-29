export function NoteImgAdd({url,onInputChange}){
    return(
        <div className="form-group">

        <input placeholder="image url" type="text" className="form-control" id="url" value={url} onChange={onInputChange} ></input>
        
        </div>
    )
}