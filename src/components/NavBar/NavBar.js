import React, { useContext } from "react";
import './NavBar.css'
import Logo from "../assets/Images/sakura_biomedical-03.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Shop } from "../Context/context";


 const NavBar = () => { 
    const {estadoA} = useContext(Shop)
    
    return(
    <div className="topnav" id="myTopnav">
        <nav className="navbar navbar-expand-sm navbar-dark  gradient-custom__nav" id="navbar">
            <div className="container-fluid">
                <div className="navbar-brand">
                <Link to="/">
                <img className="logo__size" alt="" src={Logo}/>   </Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse"  id="navbarToggleExternalContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><Link to="/">Home</Link></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><Link to="/category/electronics">Electronics</Link></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><Link to="/category/men's clothing">Men</Link></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><Link to="/category/women's clothing">Women</Link></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><Link to="/category/jewelery">Jewelery</Link></li>
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"><Link to="/cart"><CartWidget style={{position:'absolute'}}/><div style={{display:'fixed', position:'absolute',padding:'0', margin:'0',color:'white'}}>{estadoA}</div></Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br></br>
    </div>
    )
 }

 export default NavBar