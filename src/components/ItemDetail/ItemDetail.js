import Itemcount from '../ItemCount/ItemCount'
import {useNavigate} from "react-router-dom";
import React, { useState, useContext } from 'react'
import { Shop } from '../Context/Context';

const ItemDetail = ({product}) => {
  const navigate = useNavigate();
  const [agregados, setAgregados]=useState(0);
  const {addItem}= useContext(Shop)
  const{CartVariable}=useContext(Shop)
  const {setEstadoA}= useContext(Shop)
  const {estadoA}= useContext(Shop)
  const {setFinalAmmount}= useContext(Shop)
  const {finalAmmount}= useContext(Shop)
  localStorage.setItem('CartVariableItems', JSON.stringify(CartVariable));
  
  const onAdd=(number)=>{
      
      setAgregados(number)
      setEstadoA(parseInt(estadoA,10)+number)
      setFinalAmmount(parseInt(finalAmmount,10)+(product.price*number))
      addItem(product,number)
  }

  const IrACarrito =()=>{
    navigate('/ElementsInCart')
  }
  const GoBack =()=>{
    navigate('/')
  }
 let proofStock=<h5>In Stock: {product.stock}</h5>
 if(product.stock===0){
    proofStock=<h5>Product out of Stock</h5>
 }


  return (
    <div style={{paddingLeft:'25%', paddingRight:'25%', paddingTop:'1%'}}>
      <div style={{width:'100%', maxWidth:'720px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft:'auto', marginRight:'auto'}}> 
        <div>
            <div className="card">
              <h2>{product.title}</h2>
              <img alt='' className="card-img-top" style={{ paddingLeft:'25%', paddingRight:'25%', maxHeight:'300px'}} src={product.image}/> 
              <div className="card-body">
                <h4>Price: ${product.price}</h4>
                <p>{product.description}</p>
                <p>{product.category}</p>
                {proofStock}
              </div> 
            </div>
            <div className="card" style={{padding:'5%'}} >
                {!agregados ?<Itemcount  Stock={product.stock} initial={1} onAdd={onAdd}/>
                :<div ><button style={{marginLeft:'20px',marginRight:'20px'}} className="btn btn-primary btn-lg button__align" onClick={IrACarrito}> Go to Cart</button>
                <button style={{marginLeft:'20px',marginRight:'20px'}} className="btn btn-danger btn-lg button__align" onClick={GoBack}>  Go Back</button></div>
                
              }
            </div>
          </div>
      </div>



    </div> 
  )
}

export default ItemDetail