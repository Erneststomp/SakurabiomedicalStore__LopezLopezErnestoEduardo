import React from 'react'
import Item from './Items'

const ItemList = ({productDetail}) => {

  return (
    <div style={{display:'flex'}}>
         {productDetail.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}

    </div>
  )
}

export default ItemList