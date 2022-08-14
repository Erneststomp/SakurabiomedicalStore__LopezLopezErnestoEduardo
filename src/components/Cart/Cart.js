import { Shop } from '../Context/Context'
import ItemCountCart from '../ItemCount/ItemCountCart'
import React, {  useContext} from 'react'
import {useNavigate} from "react-router-dom";


const Cart = ({product}) => {
  //carga de funciones y datos que se suaran
    const navigate = useNavigate();
    const{CartVariable}=useContext(Shop)
    const {addItem}= useContext(Shop)
    const {EraseCart}= useContext(Shop)
    const {estadoA}= useContext(Shop)
    const {finalAmmount}= useContext(Shop)
    const {setConfirmOrder}= useContext(Shop)
    //llamada a la funcion de context que agrega el articulo al carrito
    const onAdd=(number)=>{
      addItem(product,number)
    }
    // llamada a la funcion de context que limpia todos los aticulos del carrito
    const EraseAll=()=>{
      EraseCart()
    }
    //llamada a la redireccion a la pagina de inicio
    const IrATienda =()=>{
      navigate('/')
    }
    //llamada a la redirreciion de confirmar compra, si no se realiza a traves de este boton, no se puede accesar a dicha pagina y mostrara un error 404
    const confirmarCompra = async ()=>{
      setConfirmOrder(1)
      navigate('/confirm')
    }
    //en caso de que exista algun elemento dentro del carrito este mostrara dicho/s articulos al usuario, el precio total cantidad y precio unitario, el stock no se actualiza cosntantemente, por lo que no se puede saber si el artiuclo aun tiene stock suficiente hasta indicar que se realizara la compra
  if(estadoA!==0){
    return (
      <div>
        <div style={{paddingLeft:'2%', paddingRight:'2%', paddingTop:'2%', display:'inline-flex',width:'100%'}}>
          <button style={{width:'200px', display:'block', alignItems:'center', position: 'relative', marginRight:'auto' ,marginLeft:'auto' }}className="btn btn-danger btn-lg button__align" onClick={EraseAll}><h4>Delete Cart</h4></button>
        </div>
          <ul style={{listStyleType: "none"}}>
              {CartVariable.map(product=>{
                  return <li key={product.id}>
                          <div style={{paddingLeft:'5%', paddingRight:'5%', paddingTop:'4%', display:'inline-flex',width:'95%'}}>
                            <div className="card" style={{height:'350px'}}> 
                              <img  className="card" style={{width:'250px', height:'250px'}} alt={{}} src={product.image}/> 
                            </div>
                            <div style={{width:'90%' , height:'350px'}}>
                                  <div className="card" style={{height:'350px'}}>
                                    <h4>{product.title}</h4>
                                    <h5>Stock: {product.stock}</h5>
                                    <div className="card-body" >
                                      <h5>Price: ${product.price}</h5>  <h3>Total: ${product.quantity*product.price}</h3>
                                        <div>
                                        <ItemCountCart  Stock={product.stock} initial={product.quantity} onAdd={onAdd} Eliminador={product.id} producto={product} />
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
                                    <button style={{width:'200px', display:'block', alignItems:'center', position: 'relative', marginRight:'auto' ,marginLeft:'auto' }} className="btn btn-primary btn-lg button__align" onClick={confirmarCompra}>Buy</button>
                                  </div>
                              </div>
                          </div> 
      </div>
    )
  }else{
    //en caso de que el carrito se encuentre vacio se pedira que se regrese a la pagina de inicio de la tienda
  return(
      <div style={{margin:'100px'}}>
        <h1>The Cart is empty</h1>
        <h2>Please, go back to the store and select an item of your choise</h2>
        <button  onClick={IrATienda} style={{margin:'50px'}} className="btn btn-primary btn-lg button__align">Go Back</button>
      </div>
    )
  }
  


}

export default Cart