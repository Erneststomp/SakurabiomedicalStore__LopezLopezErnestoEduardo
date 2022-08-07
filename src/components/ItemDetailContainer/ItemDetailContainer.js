import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';


const ItemDetailContainer = () => {
  const [productDetail,setProductDetail]=useState({});

  const params = useParams()
  //llamada al deply de los detalles de los articulos, en caso de no poder acceder a ellos, mostrara una alerta .
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
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  footer: `Document not Exist 404`
                })
              }

            } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: `${error}`
              })
            }
        }

    getProducts()

    },[])
//en caso de que se intente buscar una rticulo mediante una url especifica, si no existe, este indicara que el articulo no existe, comprobando si dentro de la llamada a dicho articulo hay una respuesta al nombre del articulo
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