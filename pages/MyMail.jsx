/* 
export class MyMail extends React.Component {
    state = {
        filterBy: '',
        Mails: []
    }
    componentDidMount() {
        this.loadMails();
    }
    loadMails() {
        Mailservice.query()
            .then(Mails => {
                console.log(Mails);
                this.setState({ Mails })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <section className ="text-white">
                <h1>MyMail!</h1>

            </section>
        )
    }
} */