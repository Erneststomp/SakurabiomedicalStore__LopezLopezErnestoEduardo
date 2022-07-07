import Itemlist from '../Items/ItemList';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [productDetail,setProductDetail]=useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const params = useParams()


    useEffect(()=>{
        const getProducts = async ()=>{
            try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json();
            setProductDetail(data)
            setProductosFiltrados(data);
            console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        setTimeout(()=>{
          getProducts()
        },1000)

    },[])

    useEffect(() => {
      if (params?.categoryId) {
        const productosFiltrados = productDetail.filter(producto => producto.category === params.categoryId)
        setProductosFiltrados(productosFiltrados)
      } else {
        setProductosFiltrados(productDetail)
      }
    }, [params, productDetail])

  return (
    <div style={{position:'relative',paddingLeft:'8%',paddingRight:'auto'}}>
      <h1>{greeting}</h1>    
      <br/>  

      <Itemlist productDetail={productosFiltrados}/>
  
    </div>
  )
}

export default ItemListContainer