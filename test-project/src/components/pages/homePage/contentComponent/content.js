import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
//components
import Main from './mainPage/main'
import Login from './loginPage/login'
import Register from './registerPage/register'
// import Content from '../contentComponent/mainPage/main';

import ConfigRoute from '../../../../routing/router-config';
import routes from '../../../../routing/routing-path';

const Content = ({ match }) => {
    console.log('match', match)
    return (

        <div className="container-fluid">
            <Switch>
                <Route exact path='/home' component={Main} />
                <Route path='/home/login' component={Login} />
                <Route path='/home/register' component={Register} />


            </Switch>
        </div >

    );
}

export default Content;
