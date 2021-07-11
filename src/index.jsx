import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from './components/layout';


ReactDom.render(

    <Layout />,
    document.getElementById('root')
);