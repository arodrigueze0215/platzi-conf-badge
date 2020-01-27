import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';

export default function App () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew}/>            
        </Switch>

        </BrowserRouter>
    );
}