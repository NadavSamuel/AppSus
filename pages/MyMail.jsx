
import { emailService } from '../services/email-service.js'
import { EmailList } from '../cmps/mail-app/EmailList.jsx';
import { SideNavBar } from '../cmps/mail-app/SideNavBar.jsx'

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
    removeEmail = (emailId) => {
        emailService.remove(emailId)
        this.loadEmails();
    }

    getMailsForDisplay() {
        const emails = this.state.emails.filter(email => email.subject.toLowerCase().includes(this.state.filterBy.toLowerCase()))
        return emails;
    }

    render() {
        const emails = this.getMailsForDisplay();
        return (
            <main className="mail-panel">
            <section className="text-white background-headline">
                <EmailList emails={emails} removeEmail={this.removeEmail} />
            </section>
            <section>
                <SideNavBar ></SideNavBar>
            </section>
            </main>
        )
    }
}