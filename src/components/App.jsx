import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

export default function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
            </Switch>
        </BrowserRouter>
    );
}