import React from 'react'
import Item from './Items'
import './Items.css'
const ItemList = ({productDetail}) => {

  return (
    <div className='grid-1' style={{display:'grid', paddingLeft:'suto',paddingRight:'2%'}}>
         {productDetail.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}

    </div>
  )
}

export default ItemList