import React, { Component } from 'react';
//components
import Home from './components/pages/homePage/home';
// import DashboardHome from './components/pages/dashboard/home/dashboardHome';
// import Main from './components/pages/homePage/contentComponent/mainPage/main'
// import Login from './components/pages/homePage/contentComponent/loginPage/login'
// import Register from './components/pages/homePage/contentComponent/registerPage/register'
import Pages from './components/pages/pages';
//routes
// import ConfigRoute from './routing/router-config';
// import routes from './routing/routing-path';





import {
  Route,
  Link
} from 'react-router-dom';

//includes
import './assets/css/default.min.css'

// const routes = [
//   {
//     path: '/home',
//     component: Home,
//     routes: [

//       {
//         path: '/home',
//         component: Main
//       },
//       {
//         path: '/home/login',
//         component: Login
//       },
//       {
//         path: '/home/register',
//         component: Register
//       }
//     ]
//   },
//   {
//     path: '/dashboard',
//     component: DashboardHome,

//   },

// ];


// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={(props) => (
//     <route.component {...props} rooute={route.routes} />
//   )} />
// );\

const Child = ({ match }) => console.log('match', match) || (
  <div>
    <h3>:id</h3>
  </div>
)
class App extends Component {
  state = {
    contacts: []
  }



  render() {

    return (
      <div className="App">
        {/* <div>{routes.</div> */}
     
        <Pages></Pages>
        {/* <Route path='/home' component={Home} /> */}

        {/* <Route exact path='/dashboard' component={DashboardHome}></Route> */}
        {/* {routes.map((route) => (
          <ConfigRoute key={route.path} {...route} />
        ))} */}

      </div>


    );
  }

}


export default App;