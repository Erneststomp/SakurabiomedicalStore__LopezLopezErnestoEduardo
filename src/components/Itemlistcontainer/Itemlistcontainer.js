import React from 'react'
import Logo2 from "../assets/Images/desfibrilador.webp"
import Itemcount from '../ItemCount/Itemcount';
import Swal from 'sweetalert2'

const itemlistcontainer = ({greeting}) => {
  let Stock=10

  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
  }
  return (
    <div>
      <p>{greeting}</p>    
      <br/>  
      <img  src={Logo2} alt="" width={200}/> 
      <Itemcount  Stock={Stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default itemlistcontainer