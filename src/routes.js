import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';


import Home from './pages/Home';
import Details from './pages/Details';



export function Routes() {

    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to ="/home"/>
                <Route exact path="/home" component={Home} />
                <Route path={`/details/:id`} component={Details} />
            </Switch>
        </Router>
    )
}
