import React from 'react'

import Itemlist from '../Items/itemlist';

const Itemlistcontainer = ({greeting}) => {
  const [articulos,setArticulos]=React.useState([]);
  const productos = [
    {id:1 , nombre: 'Desfibrilador', precio:200},
    {id:2 , nombre: 'Carro Rojo', precio:300},
    {id:3 , nombre: 'Escalpelo', precio:400}            
  ]
  
            

    const llamada = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(productos)
      },2000)
    
    })

    React.useEffect(() => {
    llamada
      .then(resolve=>setArticulos(resolve))
    }, [])

  return (
    <div>
      <h1>{greeting}</h1>    
      <br/>  

      <Itemlist articulos={articulos}/>
    </div>
  )
}

export default Itemlistcontainer