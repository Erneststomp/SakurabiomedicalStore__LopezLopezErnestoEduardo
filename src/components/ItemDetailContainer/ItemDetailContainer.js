import React, { useEffect } from 'react'
import ItemDetail from '../../ItemDetailContainer/ItemDetail';

const ItemDetailContainer = () => {
  const [productDetail,setProductDetail]=React.useState({});
    useEffect(()=>{
        const getProducts = async ()=>{
            try {
            const response = await fetch('https://rickandmortyapi.com/api/character/2')
            const data = await response.json();
            setProductDetail(data)
            .then(res=>res.json())
            .then(json=>console.log(json))
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