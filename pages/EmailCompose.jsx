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
            <div className='card' style={{ width: '30rem', height: '20rem' }}>
                <div className='card-header'>
                    <h2>Mail:</h2>
                </div>
                <div className="card-body">
                    <input name="subject" value={this.state.email.subject}
                        placeholder="Subject:" type="text"
                        onChange={this.onInputChange}
                    /><br></br>
                    <input name="body" value={this.state.email.body}
                        placeholder="Body" type="text" class="resizedTextbox"
                        onChange={this.onInputChange}
                    />
                </div>
                <button onClick={this.addEmail} class="btn btn-danger">Send!</button>
            </div>


        )
    }
}

{/* <div className='card' style={{ width: '30rem', height: '20rem' }}>
    <div className='card-header'>
        <h3>From: {email.from}</h3>
    </div>
    <div className="card-body">
        <h4>Subject: {email.subject}</h4>
        <p>{email.body}</p>
    </div>
</div> */}
