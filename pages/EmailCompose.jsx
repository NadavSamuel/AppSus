import { emailService } from "../services/email-service.js";

//This component has a double meaning - allow replying to existin

export class EmailCompose extends React.Component {
    state = {
        email: emailService.getEmpty(),
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) emailService.getById(id).then(email => this.setState({ email }))
    }
    onInputChange = (ev) => {
        const value = ev.target.value
        this.setState({ email: { ...this.state.email, [ev.target.name]: value } })

    }
    addEmail = (ev) => {
        ev.preventDefault();
        console.log('Adding Email');
        emailService.save(this.state.email)
        this.props.history.push('/mail')
    }

    render() {
        return (
            <div className='card mail-edit' style={{ width: '30rem', height:'30rem'}}>
                <input name="subject" value={ this.state.email.subject } 
                    placeholder="Subject:" type="text"
                    onChange={ this.onInputChange }
                />
                <input name="body" value={ this.state.email.body }
                    placeholder="Body" type="text"  width={"48"} height={"48"}
                    onChange={ this.onInputChange }
                />
                <button onClick={ this.addEmail }>Send!</button>
            </div>


        )
    }
}
