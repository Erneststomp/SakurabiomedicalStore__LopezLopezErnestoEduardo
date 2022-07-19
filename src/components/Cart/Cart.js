import { Shop } from '../Context/context'
import ItemCountCart from '../ItemCount/ItemCountCart'
import React, {  useContext } from 'react'
import {useNavigate} from "react-router-dom";

const Cart = ({product}) => {
    const navigate = useNavigate();
    const{cart}=useContext(Shop)
    const {addItem}= useContext(Shop)
    const {EraseCart}= useContext(Shop)
    const {estadoA}= useContext(Shop)
    const {finalAmmount}= useContext(Shop)
    const onAdd=(number)=>{
      addItem(product,number)
    }
    const EraseAll=()=>{
      EraseCart()
    }

    const IrATienda =()=>{
      navigate('/')
    }

  if(estadoA!==0){
    return (
    
      <div>

          <button style={{width:'200px', display:'flex', position: 'absolute', right: '0'}} className='boton' onClick={EraseAll}><h4>Empty Cart</h4></button>
          <ul style={{listStyleType: "none"}}>
              {cart.map(product=>{
                  return <li key={product.id}>
                          <div style={{paddingLeft:'5%', paddingRight:'5%', paddingTop:'4%', display:'inline-flex',width:'95%'}}>
                            <div style={{ }}> 
                              <img  className="card" style={{width:'250px', height:'250px'}} src={product.image}/> 
                            </div>
                            <div style={{width:'90%' , height:'250px'}}>
                                  <div className="card" style={{height:'250px'}}>
                                    <h4>{product.title}</h4>
                                    <div className="card-body" >
                                      <h5>Price: ${product.price}</h5>  <h3>Total: ${product.quantity*product.price}</h3>
                                        <div>
                                        <ItemCountCart  Stock={10} initial={product.quantity} onAdd={onAdd} Eliminador={product.id} producto={product} />
                                        </div>                
                                    </div> 
                                  </div>
                              </div>
                          </div> 
                        </li>
              })}
          </ul>           
          <div style={{paddingLeft:'5%', paddingRight:'5%', paddingTop:'4%', display:'inline-flex',width:'100%'}}>
                            <div style={{width:'100%' , height:'250px'}}>
                                  <div className="card" style={{height:'100px'}}>
                                    <h4 style={{}}>Total: ${finalAmmount}</h4>
                                    <button style={{ width:'200px'}}>Terminar Compra</button>
                                  </div>
                              </div>
                          </div> 
      </div>
    )
  }else{
  return(
      <div>
        <h1>Carrito Vacio</h1>
        <h2>Vuelva a la Tienda y seleccione sus articulos favoritos</h2>
        <button  onClick={IrATienda} style={{ width:'200px'}}>Regresar</button>

      </div>
    )
  }
  


}

export default Cart