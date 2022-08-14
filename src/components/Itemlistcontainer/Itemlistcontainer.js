import Itemlist from '../Items/ItemList';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/Config';
import { collection, query, where, getDocs } from "firebase/firestore";



const ItemListContainer = ({greeting}) => {
  const [productDetail,setProductDetail]=useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const params = useParams()


    useEffect(()=>{
        const getProducts = async ()=>{
            try {
              const q = query(collection(db, "products"));
              const querySnapshot = await getDocs(q);
              const responses=[]
              querySnapshot.forEach((doc) => {
                
                responses.push({id:doc.id,...doc.data()})

              });
            
            setProductDetail(responses)
            setProductosFiltrados(responses);
            } catch (error) {
                console.log(error)
            }
        }
      getProducts()
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