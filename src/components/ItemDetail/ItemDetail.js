import React from 'react'
import Itemcount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'

const ItemDetail = ({product}) => {
  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
  }

  return (
    <div style={{maxwidth:'1920px', paddingLeft:'25%', paddingRight:'25%', paddingTop:'1%'}}>
      <div style={{width:'100%', maxWidth:'720px', display:'grid-column'}}> 
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
            <Itemcount  Stock={10} initial={1} onAdd={onAdd}/>
          </div>
      </div>



    </div>
  )
}

export default ItemDetail