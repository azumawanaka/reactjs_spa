import React from "react";
import LoginForm from "../components/LoginForm";

function Login(props) {
    return(
        <div className="cntr">
            <div className="form-cntr">
                <h2 className="title-md">Login</h2>
                { <LoginForm /> }
            </div>
        </div>
    );
}

export default Login