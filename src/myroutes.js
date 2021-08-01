import { LayoutRedux } from 'containers/LayoutContainer';
import { AboutPage } from 'pages/AboutPage';

export const myroutes = [
    {
        path: '/',
        exact: true,
        component: LayoutRedux,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id',
        exact: true,
        component: LayoutRedux,
    }
]