import Itemcount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";
import React, { useState } from 'react'

const ItemDetail = ({product}) => {
  const navigate = useNavigate();
  const [agregados, setAgregados]=useState(0);
  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
    setAgregados(number)}
  const IrACarrito =()=>{
    navigate('/Cart')
  }

  return (
    <div style={{paddingLeft:'25%', paddingRight:'25%', paddingTop:'1%'}}>
      <div style={{width:'100%', maxWidth:'720px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft:'auto', marginRight:'auto'}}> 
        <div>
            <div className="card">
              <h2>{product.title}</h2>
              <img  className="card-img-top" style={{ paddingLeft:'25%', paddingRight:'25%'}} src={product.image}/> 
              <div className="card-body">
                <h4>Price: ${product.price}</h4>
                <p>{product.description}</p>
                <p>{product.category}</p>
              </div> 
            </div>
            <div className="card" style={{padding:'5%'}} >
                {!agregados ?<Itemcount  Stock={10} initial={1} onAdd={onAdd}/>
                :
                <button onClick={IrACarrito}>  Ir a Carrito</button>
              }
                

            </div>
          </div>
      </div>



    </div> 
  )
}

export default ItemDetail