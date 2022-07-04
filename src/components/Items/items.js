import React from 'react'
import Itemcount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'

const Items = ({item}) => {
  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
  }
  const{id,nombre,precio,pictureurl}=item
  return (
    <div style={{width:'25%'}}> 
        <div className="card">
        <img  className="card-img-top" style={{height:'200px', width:'200px'}} src={pictureurl}/> 
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