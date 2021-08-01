import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { myroutes } from './myroutes';
import { Layout } from './components/layout';
import { store } from './store';


ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {myroutes.map((route, idx) => <Route {...route} key={idx} />)}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
