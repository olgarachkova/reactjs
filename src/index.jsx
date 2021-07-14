import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { myroutes } from './myroutes';
import { Layout } from './components/layout';


ReactDom.render(

    <BrowserRouter>
        <Switch>
            {myroutes.map((route, idx) => <Route {...route} key={idx} />)}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
