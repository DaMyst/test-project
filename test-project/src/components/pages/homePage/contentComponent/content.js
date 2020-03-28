import React from 'react';
// import {
//     Route,
//     Switch
// } from 'react-router-dom';
//components
// import Main from './mainPage/main'
// import Login from './loginPage/login'
// import Register from './registerPage/register'

import ConfigRoute from '../../../../routing/router-config';
import routes from '../../../../routing/routing-path';
const Content = ({ Home }) => {
    return (

        <div className="container-fluid">
            {routes.map((route) => (
                    <ConfigRoute key={route.path} {...route} />
                ))}
                Data
        </div >

    );
}

export default Content;
