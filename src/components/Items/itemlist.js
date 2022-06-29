import React from 'react'
import Item from './items'

const itemlist = ({articulos}) => {
  return (
    <div style={{display:'flex'}}>
        {articulos?.map(item=><Item key={item.id} item={item}/>)}

    </div>
  )
}

export default itemlist