import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
  const [productDetail,setProductDetail]=useState({});
  const params = useParams()
  console.log(params)

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
              
              const docRef = doc(db, "products", params.productId);
              const docSnap = await getDoc(docRef);

              if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                const response = {id: docSnap.id, ...docSnap.data()}
                setProductDetail(response)
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
              // const response={id: docSnap.id, ...docSnap.data()}
              // setProductDetail(response)
              // setProductosFiltrados(response)

            // const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
            // const data = await response.json();
            
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