import React from 'react'

const ItemDetail = ({product}) => {
    console.log(product)
  return (
    <div>
    <h1>{product.name}</h1>
    <img src={product.image}/>
    <p>{product.species}</p>
    <p>{product.gender}</p>
    <p>{product.status}</p>
    </div>
  )
}

export default ItemDetail