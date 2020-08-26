const { Link } = ReactRouterDOM

export class Home extends React.Component {

    render() {
        return (
            <section  className ="welcome flex flex-column">
                <h1>AppSus!</h1>
                <header><h2>Welcome to the AppSus</h2></header>
{/*             go to the mail!!! <Link to="/mail">Click here</Link>
            go to the notes!!! <Link to="/notes">Click here</Link> */}

            </section>
        )
    }
}