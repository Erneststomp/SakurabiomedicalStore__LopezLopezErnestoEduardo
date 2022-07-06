import React from 'react'
import Itemcount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

const ItemDetail = ({product}) => {
  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
  }

  return (
    <div>
      <div style={{width:'25%'}}> 
        <div className="card">
          <img  className="card-img-top" style={{height:'200px', width:'200px', display:'flexbox', paddingLeft:'auto', paddingRight:'auto',justifyItems:'center'}} src={product.image}/> 
          <div className="card-body">
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.category}</p>
          </div> 
        </div>
        <Itemcount  Stock={10} initial={1} onAdd={onAdd}/>
      </div>



    </div>
  )
}

export default ItemDetail