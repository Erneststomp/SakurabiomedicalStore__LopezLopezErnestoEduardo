import React from 'react'

const ItemDetail = ({product}) => {
    console.log(product)
  return (
    <div>
      <div style={{width:'25%'}}> 
        <div className="card">
        <h1>{product.name}</h1>
        <img  className="card-img-top" style={{height:'200px', width:'200px', justifyItems:'center'}} src={product.image}/> 
          <div className="card-body">
          <p>{product.species}</p>
          <p>{product.gender}</p>
          <p>{product.status}</p>
          </div> 
        </div>
      </div>



    </div>
  )
}

export default ItemDetail