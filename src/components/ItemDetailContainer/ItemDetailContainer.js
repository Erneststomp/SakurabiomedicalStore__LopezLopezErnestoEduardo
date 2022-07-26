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
                const response = {id: docSnap.id, ...docSnap.data()}
                setProductDetail(response)
              } else {
                console.log("No such document!");
              }

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