export function NoteTodosAdd({todos,onInputChange}){
    return(
        <div className="form-group">
        {/* <label forhtml="txt">Enter text</label> */}
        <input placeholder="todos(seperate by comma)" type="text" className="form-control" id="todos" value={todos} onChange={onInputChange} ></input>
        </div>
    )
}