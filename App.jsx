const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import {MyMail} from './pages/MyMail.jsx'
import {MyNotes} from './pages/MyNotes.jsx'
import {Home} from './pages/Home.jsx'
export class App extends React.Component {

    render() {
        return (
            <Router>
            <div>
                <header>
                </header>
                <main>
                <Switch>
                <Route component={ MyMail } path="/mail"/>
                <Route component={ MyNotes } path="/notes" />

                <Route component={ Home } path="/" />
                    </Switch>
                </main>

            </div>
            </Router>
        )
    }
}

