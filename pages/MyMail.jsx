
import { mailService } from '../services/mail-service.js'
import { EmailList } from '../cmps/mail-app/EmailList.jsx';

export class MyMail extends React.Component {
    state = {
        filterBy: '',
        emails: []
    }
    componentDidMount() {
        this.loadMails();
    }
    loadMails() {
        mailService.query()
            .then(emails => {
                console.log(emails);
                this.setState({ emails })
            })
            .catch(err => console.log(err));
    }
    getMailsForDisplay() {
        const emails = this.state.emails.filter(mail => mail.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        return emails;
    }

    render() {
        const emails = this.getMailsForDisplay();
        return (
            <section className="text-white background-headline">
                <h1>MyMail!</h1>
             <EmailList emails ={emails}/>
            </section>
        )
    }
}