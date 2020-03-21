import React from 'react';
import Auth from './user-auth';
import './Login.css'

const Login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })
    }
    return (
        <div className="container">
            <h1>Login</h1>
            {
                auth.user ? <button onClick={auth.signOut} className="sign-out">Sign Out</button> :
                <button className="continue-gmail" onClick={handleSignIn}>Continue With Gmail</button>
            }
        </div>
    );
};

export default Login;