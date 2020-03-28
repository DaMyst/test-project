import React, { Component } from 'react';
//components
import Home from './homePage/home';
import Dashboard from './dashboard/home/dashboardHome';
// import DashboardHome from './components/pages/dashboard/home/dashboardHome';
// import Main from './components/pages/homePage/contentComponent/mainPage/main'
// import Login from './components/pages/homePage/contentComponent/loginPage/login'
// import Register from './components/pages/homePage/contentComponent/registerPage/register'

//routes
// import ConfigRoute from './routing/router-config';
// import routes from './routing/routing-path';





import {
    Route,
    Link,
    Switch
} from 'react-router-dom';






class Pages extends Component {
    state = {
        contacts: []
    }



    render() {

        return (
            <div className="App">
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/dashboard' component={Dashboard}/>
                </Switch>
            </div>


        );
    }

}


export default Pages;
