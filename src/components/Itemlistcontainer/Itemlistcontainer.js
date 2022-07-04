import React from 'react'
import Itemlist from '../Items/ItemList';

const ItemListContainer = ({greeting}) => {
  const [articulos,setArticulos]=React.useState([]);
  const productos = [
    {id:1 , nombre: 'Desfibrilador', precio:200, pictureurl: 'https://cdn.shopify.com/s/files/1/1111/2076/products/Capturadepantalla2020-04-27alas14.54.06_1024x1024.png?v=1588065471'},
    {id:2 , nombre: 'Carro Rojo', precio:300, pictureurl:'https://http2.mlstatic.com/D_NQ_NP_996602-MLM48112225601_112021-O.webp'},
    {id:3 , nombre: 'Escalpelo', precio:400, pictureurl: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_628/https://yoreparoacademy.com/wp-content/uploads/2020/07/11-3.png'}            
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

export default ItemListContainer