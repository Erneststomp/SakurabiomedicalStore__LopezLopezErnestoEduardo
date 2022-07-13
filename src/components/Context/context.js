import React, {createContext, useState} from 'react'
export const Shop =createContext();
const Shopprovider = ({children}) => {
    const [estadoA, setEstadoA]=useState([])
    const [cart , setCart]=useState([])
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
    const EliminateItem=(Eliminador)=>{
        
        const newarrayitems= cart.filter(product => {
            return product.id != Eliminador;
          });
          setCart(newarrayitems)

    }

    const isInCart = (product)=>{
        return cart.find(elemento=>elemento.id===product.id)
    }

    const EraseCart =()=>{
        setCart([])
        setEstadoA([])
    }

    return (
        <Shop.Provider value={{estadoA, setEstadoA, addItem,cart,EliminateItem,EraseCart}} >
            {children}
        </Shop.Provider>
    )
}

export default Shopprovider