import React from 'react'
import Carrito from "../assets/Images/carrito-de-compras1.png";
import './CarritoWidget.css'

const CartWidget = () => {
  return (
    <div><img className="carrito__size" alt="" src={Carrito}/></div>
  )
}

export default CartWidget