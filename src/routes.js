import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';


import Home from './pages/Home';
import Details from './pages/Details';



export function Routes() {

    return (
        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path={`/details/:id`} component={Details} />
            </Switch>
      
    )
}

