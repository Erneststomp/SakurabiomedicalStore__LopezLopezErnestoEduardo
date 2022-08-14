import React, {useContext, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'
import NotFoud from '../NotFound/NotFoud'
import { Shop } from '../Context/Context'
import NavBarConfirm from '../NavBar/NavBarConfirm'
import ConfirmOrder from '../Alerts/ConfirmOrder'


const MainNav = () => {
    const {confirmOrder}= useContext(Shop)
    const {RecuperarCart}=useContext(Shop)
    //funcion que verifica los archivos locales para mantener los artiuclos del carrito
    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('cartItems'));
        if (items) {
            RecuperarCart(items)
        }
     }, [])
    //funcion que verifica que estamos por realizar el pago (uicamente funcion estetica), se considera a la pagina de ingreso de datos una pagina externoa por lo que no es posible accesar a ella si no es a traves de los pasos de compra
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