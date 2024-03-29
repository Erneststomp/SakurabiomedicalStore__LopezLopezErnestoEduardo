import React, {createContext, useState} from 'react'
import Swal from 'sweetalert2';
export const Shop =createContext();
const Shopprovider = ({children}) => {
    const [estadoA, setEstadoA]=useState(0)
    const [CartVariable , setCartVariable]=useState([])
    const [finalAmmount, setFinalAmmount]=useState(0)
    const [confirmOrder, setConfirmOrder]=useState(0)
    //funcion que comprueba  si ya se cuenta con dicho tiem en el carrito, no permite agregar mas si no hay stock suficiente con la suma de la cantidad en el carrito mas la nueva
    const addItem=(product, ammount)=>{
        const productoRepetido=isInCart(product)
        if(productoRepetido){
            if((productoRepetido.quantity+ammount)<=product.stock){
            productoRepetido.quantity+=ammount
            setCartVariable([...CartVariable])
            Swal.fire('Added '+ ammount+' to your Cart')
        }else{
                setEstadoA(parseInt(estadoA,10))
                setFinalAmmount(parseInt(finalAmmount,10))
                Swal.fire({
                    icon: 'error',
                    title: 'Not Enough Stock',
                    text: 'You already have this item in your CartVariable, you are tying to add mote items than those in stock',
                  })
            }
        }
        else{
            //en caso de que el item no exista en el carrito lo agrega
        setCartVariable([...CartVariable,{...product,quantity:ammount}])
        }
        
    }
     const  RecuperarCart=(items)=>{
        setCartVariable([...items])
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
            setCartVariable([...CartVariable])
    }

    const EliminateItem=(Eliminador)=>{  
        const newarrayitems= CartVariable.filter(product => {
            return product.id !== Eliminador;
          });           
          setCartVariable(newarrayitems)
          localStorage.setItem('CartVariableItems', JSON.stringify(newarrayitems));
    }

    const isInCart = (product)=>{
        return CartVariable.find(elemento=>elemento.id===product.id)
    }

    const EraseCart =()=>{
        setCartVariable([])
        setEstadoA([])
        setFinalAmmount(0)
        localStorage.setItem('CartVariableItems', JSON.stringify([]));
        window.location.reload()
    }



    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem,CartVariable,EliminateItem,EraseCart, modifyItem, finalAmmount, setFinalAmmount, confirmOrder, setConfirmOrder, RecuperarCart}} >
            {children}
        </Shop.Provider>
    )
}

export default Shopprovider