import React, { Component } from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import Content from '../contentComponent/content';


//routes
const Child = ({ match }) => console.log('match', match) || (
    <div>
        <h3>:id{}</h3>
    </div>
)

const Header = ({ match }) => {

    return (
        <header>
            <div className="logo">Logo</div>
            <nav>
                <ul>
                    <li className="first">
                        <Link to="/home" >Home</Link>
                    </li>
                    <li>
                        <Link to="/home/Login">Login</Link>
                    </li>
                    <li className="last">
                        <Link to="/home/Register">Register</Link>
                    </li>

                </ul>

            </nav>

        </header>

    );

}

export default Header;
