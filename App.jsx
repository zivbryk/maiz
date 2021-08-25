const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from './js/cmps/app-header.jsx'
import { AppHome } from './js/pages/app-home.jsx'
import { Mbooks } from './js/pages/mbooks.jsx'
import { NoteApp } from './js/pages/note-app.jsx'
import { EmailApp } from './js/pages/email-app.jsx'


// Simple React Component
export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main className="app">
                <Switch>
                    <Route path="/mbooks" component={Mbooks} />
                    <Route path="/zmail" component={EmailApp} />
                    <Route path="/keeper" component={NoteApp} />
                    <Route path="/" component={AppHome} />
                </Switch>
            </main>
        </Router>
    )
}

