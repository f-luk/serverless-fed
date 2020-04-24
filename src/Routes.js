import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './cointainers/Home';
import NotFound from './cointainers/NotFound';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}