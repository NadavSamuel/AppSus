export function NoteTodosAdd({todos,onInputChange}){
    return(
        <div className="form-group">
        <label forhtml="txt">Enter text</label>
        <input type="text" className="form-control" id="todos" value={todos} onChange={onInputChange} ></input>
        </div>
    )
}