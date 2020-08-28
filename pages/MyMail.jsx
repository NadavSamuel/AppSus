
import { emailService } from '../services/email-service.js'
import { StarButton } from '../cmps/mail-app/StarButton.jsx';
import { SideMenuFilter } from '../cmps/mail-app/SideMenuFilter.jsx';

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
    handleStar = email =>{
        //Toggling the isStarred Property of an email in which a star button was clicked
        const emails = [...this.state.emails];
        const index = emails.indexOf(email);
        emails[index] = {...emails[index]};
        //Here is the toggeling itself
        emails[index].isStarred =!emails[index].isStarred;
        this.setState({emails})
    }


    render() {
        const { length: count } = this.state.emails;
        return (
            <div className="row">
                <div className="col-2">
                    <SideMenuFilter></SideMenuFilter>
                </div>
                <main className="container">
                    <h1>My Mails</h1>
                    <p>Displaying a total of {count} emails</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>From</th>
                                <th>Subject</th>
                                <th>Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.emails.map(email => (
                                <tr key={email.id}>
                                    <td>{email.from}</td>
                                    <td>{email.subject}</td>
                                    <td>{formatMailTime(email.sentAt)}</td>
                                    <td>
                                        <button type="button" className="btn btn-labeled btn-danger" onClick={() => this.handleDelete(email)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                        <StarButton isStarred={email.isStarred} onClick ={()=>this.handleStar(email)}></StarButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>

        )
    }
}

function formatMailTime(unixTime) {
    const dateObject = new Date(unixTime);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;

}
