import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'
import NotFoud from '../NotFound/NotFoud'
import { Shop } from '../Context/context'
import NavBarConfirm from '../NavBar/NavBarConfirm'
import ConfirmOrder from '../Alerts/ConfirmOrder'


const MainNav = () => {
    const {confirmOrder}= useContext(Shop)
    const {RecuperarCart}=useContext(Shop)
    
    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('cartItems'));
        if (items) {
            RecuperarCart(items)
        }
     }, [])
    
    let content=<div className="App">
       <NavBar/>
       <Routes>
           <Route path='/' element={<ItemListContainer/>}></Route>
           <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
           <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='*' element={<NotFoud/>}></Route>
       </Routes>
   </div>
    if(confirmOrder===1){
       content=<div className="App">
        <NavBarConfirm/>
         <Routes>
           <Route path='/confirm' element={<ConfirmOrder/>}></Route>
       </Routes>
   </div>
    }

  return (
    
    <BrowserRouter>
        {content}
  </BrowserRouter>
  )
}

export default MainNav