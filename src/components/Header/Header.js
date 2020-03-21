
import React from 'react';
import '../../App.css';
import logo from '../../images/logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../Login/user-auth';
import { Link } from 'react-router-dom';
    


const Header = () => {
    const auth = useAuth();
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/home';
        })
    }
    return (
        <div className="text-center">
            <img className="img-fluid w-25" src={logo} alt=""/>
            <nav className="navbar navbar-expand-lg lead">
                <a href="/">
                    <img className="img-brand" src={logo} alt=""/>
                </a>
                <ul className="navbar-nav">
                    <li className="navbar-item ml-4">
                        <a href="/shop" className="nav-link">Shop  </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/review" className="nav-link">Order Review  </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/manage" className="nav-link">Manage Inventory Here</a>
                    </li>
                </ul>
                {
                    auth.user && <span style={{ color: "yellow" }}>{auth.user.name.toUpperCase()}</span>
                }
                {
                    auth.user ? <a onClick={handleSignOut} className="btn btn-outline-danger" href="/login">Sign Out</a>
                    : <a className="btn btn-outline-warning" href="/login">Sign In</a>
                }
            </nav>
        </div>
    );
};

export default Header;