const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { MyMail } from './pages/MyMail.jsx'
import { MyNotes } from './pages/MyNotes.jsx'
import { Home } from './pages/Home.jsx'
import { NavBar } from './cmps/NavBar.jsx'
import { EmailDetails } from './pages/EmailDetails.jsx'
import { EmailCompose } from './pages/EmailCompose.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <header>
                        <NavBar />
                    </header>
                    <main>
                        <Switch>
                            <Route component={EmailCompose} path="/mail/edit/:id?" />
                            <Route component={EmailDetails} path="/mail/:mailId" />
                            <Route component={MyMail} path="/mail" />
                            <Route component={MyNotes} path="/notes" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>

                </div>
            </Router>
        )
    }
}

