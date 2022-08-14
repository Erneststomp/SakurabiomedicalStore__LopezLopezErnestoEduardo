import React, { useContext } from "react";
import './NavBar.css'
import Logo from "../assets/Images/sakura_biomedical-03.png";
import { Link } from "react-router-dom";
import { Shop } from "../Context/Context";


 const NavBarConfirm = () => { 
    const {setConfirmOrder}= useContext(Shop)
    const change=()=>{
        setConfirmOrder(0)
    }

    return(
    <div className="topnav" id="myTopnav">
        <nav className="navbar navbar-expand-sm navbar-dark  gradient-custom__nav" id="navbar">
            <div className="container-fluid">
                <div className="navbar-brand">
                <Link to="/">
                <img className="logo__size" alt="SakuraBiomedical" src={Logo}/>   </Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="NavBar__Fromat nav-item nav__ul__border ms-1 body__header__border body__header__nav__ul__textcolor"> <button style={{backgroundColor: 'transparent', border:'0px'}} onClick={change}><Link to="/ElementsInCart">Volver</Link></button></li>
                    </ul>
            </div>
        </nav>
        <br></br>
    </div>
    )
 }

 export default NavBarConfirm