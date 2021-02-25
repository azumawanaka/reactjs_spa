import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component
{
    render() {
        return (
            <div className="header">
                <div className="cntr dflex-center">
                    <Link to="/" className="logo">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Logo" />
                    </Link>
                    <ul className="top-navigation">
                        <li>
                            { <Link to="/login" className="login-link">Login</Link> }
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header