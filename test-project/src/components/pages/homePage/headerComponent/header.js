import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


//routes


class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">Logo</div>
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/home/main">Home</Link>
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

}

export default Header;
