
import React from 'react';
import '../../App.css';
import logo from '../../images/logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="text-center">
            <img className="img-fluid w-25" src={logo} alt=""/>
            <nav className="navbar navbar-expand-lg navbar-dark lead bg-dark">
                <a href="">
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
            </nav>
        </div>
    );
};

export default Header;