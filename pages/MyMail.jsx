const { Link } = ReactRouterDOM
import { emailService } from '../services/email-service.js'
import { StarButton } from '../cmps/mail-app/StarButton.jsx';
import { EmailFilter } from '../cmps/mail-app/EmailFilter.jsx';


export class MyMail extends React.Component {
    state = {
        filterBy: '',
        emails: []
    }
    componentDidMount() {
        this.loadEmails();
    }
    loadEmails() {
        emailService.query()
            .then(emails => {
                console.log(emails);
                this.setState({ emails })
            })
            .catch(err => console.log(err));
    }

    handleDelete = email => {
        const emails = this.state.emails.filter(em => em.id !== email.id);
        this.setState({ emails })

    }
    handleStarredFilter = () => {
        const emails = this.state.emails.filter(em => em.isStarred === true);
        this.setState({ emails })

    }
    handleOpenedFilter = () => {
        const emails = this.state.emails.filter(em => em.isRead === true);
        this.setState({ emails })
        console.log(this.state.emails)

    }
    handleUnOpenedFilter = () => {
        const emails = this.state.emails.filter(em => em.isRead === false);
        this.setState({ emails })
        console.log(this.state.emails)

    }
    handleDelete = email => {
        const emails = this.state.emails.filter(em => em.id !== email.id);
        this.setState({ emails })

    }
    handleStar = email => {
        //Toggling the isStarred Property of an email in which a star button was clicked
        const emails = [...this.state.emails];
        const index = emails.indexOf(email);
        emails[index] = { ...emails[index] };
        //Here is the toggeling itself
        emails[index].isStarred = !emails[index].isStarred;
        this.setState({ emails })
    }

    setFilter = (filterBy) => {
        this.props.history.push(`/mail?filterBy=${filterBy}`)
        this.setState({ filterBy })
        const emails = this.state.emails.filter(em => em.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        this.setState({ emails })
    }


    render() {
        const { length: count } = this.state.emails;
        return (
            <div className="row grow w-100">
                <div className="col-12 py-3">

                </div>
                <div className="col-4 py-3">
                    <h1>My Email!</h1>
                    <Link to="/mail/edit"><button type="button" className="btn btn-primary btn-block" >Compose Email</button></Link>
                    <button type="button" className="btn btn-info btn-block" onClick={() => this.loadEmails()}>Inbox</button>
                    <button type="button" className="btn btn-success btn-block" onClick={() => this.handleOpenedFilter()}>Opened Emails</button>
                </div>
                <div className="main col-8 h-100 py-3">
                    <main className="container">
                        <h2>Hello</h2>
                        <p className="p-3 mb-2 bg-dark text-white">Displaying a total of <span className="text-primary">{count}</span> emails</p>
                        <table className="table">
                            <thead>
                                <tr className="p-3 mb-2 bg-warning text-dark">
                                    <th>From</th>
                                    <th>Subject</th>
                                    <th>Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.emails.map(email => (
                                    <tr key={email.id} className={email.isRead ? "table-success" : "table-danger"}>
                                        <td>{email.from}</td>
                                        <td>{email.subject}</td>
                                        <td>{formatMailTime(email.sentAt)}</td>
                                        <td>
                                            <button type="button" className="btn btn-labeled btn-danger" onClick={() => this.handleDelete(email)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            <Link to={`/mail/${email.id}`} className="btn btn-info">
                                                <i className="fa fa-envelope"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div >

        )
    }
}

function formatMailTime(unixTime) {
    const dateObject = new Date(unixTime);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;

}
