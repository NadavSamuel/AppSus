const { Link } = ReactRouterDOM
import { emailService } from "../services/email-service.js";

export class EmailDetails extends React.Component {
    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail()
        console.log(this.state.email)
    }

    loadEmail() {
        const emailId = this.props.match.params.mailId
        console.log(emailId)
        emailService.getById(emailId)
            .then(email => this.setState({ email }))
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Prev', prevProps);
        console.log('Curr', this.props);
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
            this.loadEmail()
        }
    }

    render() {
        const { email } = this.state
        console.log(email)
        if (!email) return <div>Loading....</div>
        const { prevEmailId, nextEmailId } = emailService.getNextPrev(email.id)
        return (

            <div className="mail">
                <div className='card' style={{ width: '30rem', height:'20rem' }}>
                    <div className='card-header'>
                        <h3>From: {email.from}</h3>
                    </div>
                    <div className="card-body">
                        <h4>Subject: {email.subject}</h4>
                        <p>{email.body}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => this.props.history.push('/mail')} className="p-3 mb-2 bg-info text-white">Back</button>
                    <Link to={`/mail/edit/${email.id}`} className="p-3 mb-2 bg-primary text-white"><i className="fa fa-reply" aria-hidden="true"></i></Link>
                </div><br></br>
                <Link to={`/mail/${prevEmailId}`} className="p-3 mb-2 bg-dark text-white"><i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                </Link>|
                <Link to={`/mail/${nextEmailId}`} className="p-3 mb-2 bg-dark text-white"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </Link>

            </div>

        )
    }
}


<div className="row grow w-100">
<div className="col-12 py-3">

</div>
<div className="col-4 py-3">
    <h1>My Email!</h1>
    <Link to="/mail/edit"><button type="button" className="btn btn-primary btn-block" >Compose Email</button></Link>
    <button type="button" className="btn btn-info btn-block" onClick={() => this.loadEmails()}>All Emails</button>
    <button type="button" className="btn btn-success btn-block" onClick={() => this.handleOpenedFilter()}>Marked as open Emails</button>
</div>
<div className="main col-8 h-100 py-3">
    <main className="container">

    </main>
</div>
</div >