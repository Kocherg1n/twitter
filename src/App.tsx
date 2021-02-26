import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {SignIn} from './pages/SignIn';

export const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/signin' component={SignIn}/>
            </Switch>
        </div>
    );
}
