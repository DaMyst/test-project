// import React from 'react';
// import {
//     Route,
// } from 'react-router-dom';
//components
import Home from '../components/pages/homePage/home';
import DashboardHome from '../components/pages/dashboard/home/dashboardHome';
import Main from '../components/pages/homePage/contentComponent/mainPage/main'
import Login from '../components/pages/homePage/contentComponent/loginPage/login'
import Register from '../components/pages/homePage/contentComponent/registerPage/register'

const routes = [
    {
        path: '/home',
        component: Home,
        routes: [

            {
                path: '/home/main',
                component: Main
            },
            {
                path: '/home/login',
                component: Login
            },
            {
                path: '/home/register',
                component: Register
            }
        ]
    },
    {
        path: '/dashboard',
        component: DashboardHome,

    },

];


export default routes;