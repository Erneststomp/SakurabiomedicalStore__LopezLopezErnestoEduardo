import { Shop } from '../Context/context'
import ItemCountCart from '../ItemCount/ItemCountCart'
import React, {  useContext } from 'react'

const Cart = ({product}) => {
  const{cart}=useContext(Shop)
  const {addItem}= useContext(Shop)
  const {EraseCart}= useContext(Shop)
  const onAdd=(number)=>{
    addItem(product,number)
  }
const EraseAll=()=>{
  EraseCart()
}

  return (
    <div>
        <button style={{width:'200px', display:'flex', position: 'absolute', right: '0'}} className='boton' onClick={EraseAll}><h4>Eliminar Todo</h4></button>
        <ul style={{listStyleType: "none"}}>
            {cart.map(product=>{
                return <li key={product.id}>
                      <div style={{paddingLeft:'5%', paddingRight:'5%', paddingTop:'4%', display:'inline-flex',width:'95%'}}>
                        <div style={{ }}> 
                          <img  className="card" style={{width:'250px', height:'200px'}} src={product.image}/> 
                        </div>
                        <div style={{width:'90%' , height:'200px'}}>
                              <div className="card" style={{height:'200px'}}>
                                <h4>{product.title}</h4>
                                <div className="card-body" >
                                  <p>Price: ${product.price}</p>
                                  <div>
                                    <ItemCountCart  Stock={10} initial={product.quantity} onAdd={onAdd} Eliminador={product.id}/>
                                    </div>
                                </div> 
                              </div>
                          </div>
                      </div> 
                </li>
            })}
        </ul>
    </div>
  )
}

export default Cart