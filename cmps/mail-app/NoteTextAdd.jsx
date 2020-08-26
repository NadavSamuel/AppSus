export class NoteTextAdd extends React.Component {
    state = {
            title:'text',
            txt:'text'
      
        
    }
    onInputChange = (ev) => {
        // console.log('Input:', ev.target.name);
        // console.log('Changed', ev.target.value);
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        // this.props.searchBook(value)
        const type = ev.target.id
        this.setState({...this.state, ...type.value })
      }

    render(){
        return(
            <div>
                 <div className="form-group">
    <label forhtml="title">Enter title</label>
    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" value={this.state.noteInfo.title}></input>
  </div>
  <div className="form-group">
    <label forhtml="txt">Enter text</label>
    <input type="text" className="form-control" id="txt" value={this.state.noteInfo.txt}></input>
  </div>
            </div>
        )
    }
}