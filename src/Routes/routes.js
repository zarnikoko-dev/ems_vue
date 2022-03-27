import UserLogin from '../components/UserLogin.vue'
import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard.vue';
import { auth,notAuth } from '../middleware/auth_route';

const routes = [
    {
        path:'/login',
        component : UserLogin,
        name : 'login',
        meta : {
            middleware:[notAuth],
        },
    },
    {
        path:'/',
        component : Home,
        name : 'home',
    },
    {
        path:'/dashboard',
        component : Dashboard,
        name : 'dashboard',
        meta : {
            middleware:[auth],
        },
    },
];

export default routes;