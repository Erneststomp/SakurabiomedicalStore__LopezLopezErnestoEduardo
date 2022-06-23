import React from "react";
import './NavBar.css'
import Logo from "../assets/Images/sakura_biomedical-03.png";
import CartWidget from "../CartWidget/CartWidget";

 const NavBar = () => { 
    return(
    <div className="topnav" id="myTopnav">
        <nav class="navbar navbar-expand-sm navbar-dark  gradient-custom__nav" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="../../index.html">
                <img className="logo__size" alt="" src={Logo}/>   
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse"  id="navbarToggleExternalContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a class="nav-link" href="../../index.html">Inicio</a></li>
                        <li class="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a class="nav-link" href="about.html">Nosotros</a></li>
                        <li class="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a class="nav-link" href="clients.html">Nuestros Clientes</a></li>
                        <li class="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a class="nav-link" href="portafolio.html">Tienda</a></li>
                        <li class="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><a class="nav-link" href="contact.html"><CartWidget/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
 }

 export default NavBar