import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [productDetail,setProductDetail]=useState({});
  const params = useParams()
  console.log(params)

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
            const data = await response.json();
            setProductDetail(data)
            } catch (error) {
                console.log(error)
            }
        }

          getProducts()

    },[])
  return (
    <div>
        <ItemDetail product={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer