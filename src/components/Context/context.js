import React, {createContext, useState} from 'react'
import Swal from 'sweetalert2';
export const Shop =createContext();
const Shopprovider = ({children}) => {
    const [estadoA, setEstadoA]=useState(0)
    const [cart , setCart]=useState([])
    const [finalAmmount, setFinalAmmount]=useState(0)
    const [confirmOrder, setConfirmOrder]=useState(0)
    //funcion que comprueba  si ya se cuenta con dicho tiem en el carrito, no permite agregar mas si no hay stock suficiente con la suma de la cantidad en el carrito mas la nueva
    const addItem=(product, ammount)=>{
        const productoRepetido=isInCart(product)
        if(productoRepetido){
            if((productoRepetido.quantity+ammount)<=product.stock){
            productoRepetido.quantity+=ammount
            setCart([...cart])
            Swal.fire('Added '+ ammount+' to your Cart')
        }else{
                setEstadoA(parseInt(estadoA,10))
                setFinalAmmount(parseInt(finalAmmount,10))
                Swal.fire({
                    icon: 'error',
                    title: 'Not Enough Stock',
                    text: 'You already have this item in your cart, you are tying to add mote items than those in stock',
                  })
            }
        }
        else{
            //en caso de que el item no exista en el carrito lo agrega
        setCart([...cart,{...product,quantity:ammount}])
        }
        
    }
     const  RecuperarCart=(items)=>{
        setCart([...items])
        let newAmmount=Object.keys(items).length
        
        let totalammount=0;
        let newquantity=0
        let newobjecto=Object.values(items)
        for(let i=0;i<newAmmount;i++){
            let newprices=newobjecto[i].price*newobjecto[i].quantity
            newquantity=newobjecto[i].quantity+newquantity
            totalammount=newprices+totalammount
            setFinalAmmount(totalammount)
            setEstadoA(newquantity)
        }

     }

    const modifyItem=(product, number)=>{
            product.quantity=number
            setCart([...cart])
    }

    const EliminateItem=(Eliminador)=>{  
        const newarrayitems= cart.filter(product => {
            return product.id !== Eliminador;
          });           
          setCart(newarrayitems)
          localStorage.setItem('cartItems', JSON.stringify(newarrayitems));
    }

    const isInCart = (product)=>{
        return cart.find(elemento=>elemento.id===product.id)
    }

    const EraseCart =()=>{
        setCart([])
        setEstadoA([])
        setFinalAmmount(0)
        localStorage.setItem('cartItems', JSON.stringify([]));
        window.location.reload()
    }



    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem,cart,EliminateItem,EraseCart, modifyItem, finalAmmount, setFinalAmmount, confirmOrder, setConfirmOrder, RecuperarCart}} >
            {children}
        </Shop.Provider>
    )
}

export default Shopprovider