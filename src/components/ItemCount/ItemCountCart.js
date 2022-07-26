import React,{useState , useContext} from 'react'
import './ItemCount.css'
import Swal from 'sweetalert2'
import { Shop } from '../Context/context';

const ItemCountCart = ({Stock, initial, onAdd, Eliminador,producto}) => {
    
    const [number,setNumber] = useState(initial);
    const {EliminateItem}= useContext(Shop)
    const {setEstadoA}= useContext(Shop)
    const {estadoA}= useContext(Shop)
    const {modifyItem}= useContext(Shop)
    const {setFinalAmmount}= useContext(Shop)
    const {finalAmmount}= useContext(Shop)

    const cambioContadormas= () =>{
          if(number<Stock){
            setNumber(number+1)
            modifyItem(producto,number+1)
            setEstadoA(estadoA+1)
            setFinalAmmount(finalAmmount+producto.price)
            
        }else{
            Swal.fire({
                icon: 'error',
                text: 'Stock Maximo: '+Stock,
              })
        }
          
    }
    const cambioContadormenos= () =>{
        if( number>1){
            setNumber(number-1)
            modifyItem(producto,number-1)
            setEstadoA(estadoA-1)
            setFinalAmmount(finalAmmount-producto.price)
        }else{
            Swal.fire({
                icon: 'error',
                text: 'Compra minima: 1',
              })
        }
    }

    const EliminarCartItem=()=>{

        Swal.fire({
            title: 'Desea eliminar el articulo de su carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                EliminateItem(Eliminador)
                setFinalAmmount(finalAmmount-(producto.price*producto.quantity))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success',setEstadoA(estadoA-producto.quantity)
              )
            }
          })


        
      }

    return (

    <div>
        <div className='displaybutton'>
            <button className='boton' onClick={EliminarCartItem}><h3>Eliminar</h3></button>
            <button className='boton' onClick={cambioContadormenos}><h2>-</h2></button>
            <h2>{number}</h2>
            <button className='boton' onClick={cambioContadormas}><h2>+</h2></button>
        </div>
    </div>
  )
}

export default ItemCountCart