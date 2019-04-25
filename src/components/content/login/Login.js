import React from 'react';
import s from "./Login.module.css";

const Login = () => {
    return(
        <div className={s.login}>
            <h1>Login</h1>
            <div>
                <div>
                Username:
                </div>
                <div>
                    <textarea rows="1" cols="20"/>
                </div>
                <div>
                    Password:
                </div>
                <div>
                    <textarea rows="1" cols="20"/>
                </div>
            </div>
        </div>
    );
}

export default Login;