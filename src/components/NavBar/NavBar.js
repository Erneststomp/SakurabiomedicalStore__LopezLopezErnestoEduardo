import React from "react";
import './NavBar.css'
import Logo from "../assets/Images/sakura_biomedical-03.png";
import CartWidget from "../CartWidget/CartWidget";

 const NavBar = () => { 
    return(
    <div className="topnav" id="myTopnav">
        <nav className="navbar navbar-expand-sm navbar-dark  gradient-custom__nav" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="../../index.html">
                <img className="logo__size" alt="" src={Logo}/>   
                </a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse"  id="navbarToggleExternalContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a className="nav-link" href="../../index.html">Inicio</a></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a className="nav-link" href="about.html">Nosotros</a></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a className="nav-link" href="clients.html">Nuestros Clientes</a></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a className="nav-link" href="portafolio.html">Tienda</a></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a className="nav-link" href="contact.html"><CartWidget/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
 }

 export default NavBar