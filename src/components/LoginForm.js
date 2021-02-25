import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component
{
    render() {
        return (
            <form className="form login">
                <div className="form-grp">
                    <label for="email">Email</label>
                    <input type="email" id="email" className="email" />
                </div>
                <div className="form-grp">
                    <label for="password">Password</label>
                    <input type="password" id="password" className="password" />
                </div>
                <div className="form-grp">
                    <button type="submit" className="btn btn-submit">Login</button>
                </div>
                <div className="form-footer tc">
                    { <Link to="/register" className="acc-link">No account yet? <strong>REGISTER HERE</strong></Link> }
                </div>
            </form>
        );
    }
}

export default LoginForm