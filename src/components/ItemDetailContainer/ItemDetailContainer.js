import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom'
const ItemDetailContainer = () => {
  const [productDetail,setProductDetail]=useState({});
  const params = useParams()
    let IDCContent=<ItemDetail product={productDetail}/>
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

    if (productDetail.title===undefined){
      IDCContent=<div style={{margin:'100px'}}>
        <h1>Article Not Found</h1>
        <h2>Please select another item available in our page</h2>
        <Link to='/'><button style={{margin:'50px'}} className="btn btn-primary btn-lg button__align">Go Home </button></Link>
      </div>
    }
    
  return (
    <div>
        {IDCContent}
    </div>
  )
}

export default ItemDetailContainer