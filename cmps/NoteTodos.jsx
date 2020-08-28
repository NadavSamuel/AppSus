import { DeleteBtn } from './Deletebtn.jsx'
import { Modal } from './Modal.jsx'

export class NoteTodos extends React.Component {
    state = {
        // isEdit: false,
        todos: [{ text: '', isMarked: false }]
    }
    componentDidMount() {
        const currTodos = this.props.note.info.todos.split(',')
        this.setState({
            todos: currTodos.map((todo) => {
                return {
                    text: todo,
                    isMarked: false
                }

            })
        })
    }
    openEditModal = () => {
        if (this.state.isEdit) return
        this.setState({ isEdit: true })
    }
    toggleEditModal = (ev) => {
        ev.stopPropagation()
        console.log(this.state.isEdit)
        this.setState({ isEdit: false })
    }
    toggleDoneTodo = (idx) => {
        let todos = [...this.state.todos]
        let currTodo = { ...todos[idx] }
        currTodo.isMarked = !currTodo.isMarked
        todos[idx] = currTodo
        this.setState({ todos })
        console.log(...this.state.todos)

    }

    render() {
        const todoMark = {
            textDecoration: 'lineThrough'
        };
        var note = this.props.note
        let todos = this.state.todos
        // if (todos === '') todos = todos.split(',') || todos


        return (
            <article className="note text-note" key={note.id}>
                <DeleteBtn noteId={note.id} loadNotes={this.props.loadNotes} />
                <h2>{note.info.title}</h2>
                <ul>{todos.map((todo, idx) => {
                    return <li className={todo.isMarked && "done-todo"}
                        key={idx} onClick={() => { this.toggleDoneTodo(idx) }}>{todo.text}</li>
                })}</ul>
                {/* {this.state.isEdit&&<Modal toggleEditModal={this.toggleEditModal} note={note}  />} */}
            </article>

        )

    }
}