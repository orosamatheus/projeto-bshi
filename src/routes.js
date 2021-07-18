import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';


import Home from './pages/Home';
import Details from './pages/Details';



export function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="https://orosamatheus.github.io/projeto-bshi/" component={Home} />
                <Route path={`https://orosamatheus.github.io/projeto-bshi/details/:id`} component={Details} />
            </Switch>
        </Router>
    )
}
