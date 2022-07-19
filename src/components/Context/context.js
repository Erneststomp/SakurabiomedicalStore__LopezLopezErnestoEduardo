import React, {createContext, useState} from 'react'
export const Shop =createContext();
const Shopprovider = ({children}) => {
    const [estadoA, setEstadoA]=useState(0)
    const [cart , setCart]=useState([])
    const [finalAmmount, setFinalAmmount]=useState(0)

    const addItem=(product, ammount)=>{
        const productoRepetido=isInCart(product)
        if(productoRepetido){
            productoRepetido.quantity+=ammount
            setCart([...cart])
        }
        else{
        setCart([...cart,{...product,quantity:ammount}])
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
    }

    const isInCart = (product)=>{
        return cart.find(elemento=>elemento.id===product.id)
    }

    const EraseCart =()=>{
        setCart([])
        setEstadoA([])
        setFinalAmmount(0)
    }



    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem,cart,EliminateItem,EraseCart, modifyItem, finalAmmount, setFinalAmmount}} >
            {children}
        </Shop.Provider>
    )
}

export default Shopprovider