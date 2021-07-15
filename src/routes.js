import{
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';


function Rota({path, component}){
    return(
        <Route path = {path} component={component}/>
    )
}

export function Routes(){
    return(
            <Switch>
                <Rota path="/" component={Home}/>
            </Switch>
    )
}
