import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {SignIn} from './pages/SignIn';

export const App: React.FC = (): React.ReactElement => {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/signIn' component={SignIn}/>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    );
}
