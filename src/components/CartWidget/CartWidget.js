import React from 'react'
import carrito from "../assets/Images/carrito-de-compras1.png";
import './Carritowidget.css'

const CartWidget = () => {
  return (
    <div><img className="carrito__size" alt="" src={carrito}/></div>
  )
}

export default CartWidget