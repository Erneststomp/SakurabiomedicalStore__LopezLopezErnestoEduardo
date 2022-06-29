import React from 'react'
import Logo2 from "../assets/Images/desfibrilador.webp"
import Itemcount from '../ItemCount/Itemcount';
import Swal from 'sweetalert2'

const Items = ({item}) => {
  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
  }
  const{id,nombre,precio}=item
  return (
    <div style={{width:'25%'}}> 
        <div className="card">
        <img  className="card-img-top" src={Logo2}/> 
          <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">Precio: {precio}</p>
          </div> 
          <Itemcount  Stock={10} initial={1} onAdd={onAdd}/>
        </div>
        
       
    </div>
  )
}

export default Items