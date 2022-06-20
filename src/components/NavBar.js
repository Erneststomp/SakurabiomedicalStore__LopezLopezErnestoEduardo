import React from "react";
import './NavBar.css'
import Logo from "./assets/sakura_biomedical-03.png";

 const NavBar = () => { 
    return(
    <div className="topnav" id="myTopnav">
        <div className="NavBar__Container">
            <img className="image__size" src={Logo}/>    
            <ul className="NavBar__Align">
                <li className="NavBar__Fromat"><a className="" href="../../index.html">Inicio</a></li>
                <li className="NavBar__Fromat"><a className="" href="about.html">Nosotros</a></li>
                <li className="NavBar__Fromat"><a className="" href="clients.html">Nuestros Clientes</a></li>
                <li className="NavBar__Fromat"><a className="" href="service.html">Tienda</a></li>
            </ul>    
        </div>        
    </div>
    )
 }

 export default NavBar