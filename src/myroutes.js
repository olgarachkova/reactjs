import { Layout } from './components/layout';
import { AboutPage } from './pages/AboutPage';

export const myroutes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id',
        exact: true,
        component: Layout,
    }
]