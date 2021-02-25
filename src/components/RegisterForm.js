import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegisterForm extends Component
{
    state = {
        email: '',
        password: '',
        password_confirmation: ''
    };
    
    submit(e) {
        e.preventDefault();

        if(this.state.password === this.state.password_confirmation) {
            alert('Registration successful!');
        }else{
            alert('You have successfully registered!');
        }
    
        return false;
    }

    render() {
        return (
            <form className="form login" onSubmit={(e) => { this.submit(e); }}>
                <div className="form-grp">
                    <label for="email">Email</label>
                    <input type="email" id="email" className="email"
                        onChange={(e) => { this.setState({ email: e.target.value }); }}
                    />
                </div>
                <div className="form-grp">
                    <label for="password">Password</label>
                    <input type="password" id="password" className="password"
                        onChange={(e) => { this.setState({ password: e.target.value }); }}
                    />
                </div>
                <div className="form-grp">
                    <label for="password">Confirm Password</label>
                    <input type="password" id="password_confirmation" className="password"
                        onChange={(e) => { this.setState({ password_confirmation: e.target.value }); }}
                    />
                </div>
                <div className="form-grp">
                    <button type="submit" className="btn btn-submit">Register</button>
                </div>
                <div className="form-footer tc">
                    { <Link to="/login" className="acc-link">Already have an account? <strong>LOGIN HERE</strong></Link> }
                </div>
            </form>
        );
    }
}

export default RegisterForm