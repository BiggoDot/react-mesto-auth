import React from 'react';
import logo from "../images/logo.svg";
import {Link, useLocation} from 'react-router-dom'

function Header(props) {
    let location = useLocation();
    let {email} = props.userEmail || {};

    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Место"/>
            <div className="header__container">
                {location.pathname === '/' ? <>
                    <div className="header__email">{email}</div>
                    <Link onClick={props.signOut} className="header__logout" to={'/signin'}>Выйти</Link>
                </> : location.pathname === '/signin' ?
                    <Link className="header__logout" to={'/signup'}>Регистрация</Link>
                    : location.pathname === '/signup' ?
                        <Link className="header__logout" to={'/signin'}>Войти</Link> : ""}
            </div>
        </header>)
}

export default Header;