import React from "react";
import RegisterForm from "../components/RegisterForm";

function Register(props) {
    return(
        <div className="cntr">
            <div className="form-cntr">
                <h2 className="title-md">Register</h2>
                { <RegisterForm /> }
            </div>
        </div>
    );
}

export default Register