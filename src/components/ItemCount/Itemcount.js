import React from 'react'
import './ItemCount.css'
import Swal from 'sweetalert2'
const Itemcount = ({onAdd, Stock, initial}) => {
    const [number,setNumber] = React.useState(initial);

    const cambioContadormas= () =>{
        Stock>number?setNumber(number+1):Swal.fire({
            icon: 'error',
            text: 'Stock Maximo: '+number,
          })
    }
    const cambioContadormenos= () =>{
        number>initial?setNumber(number-1):Swal.fire({
            icon: 'error',
            text: 'Compra minima: '+initial,
          })
    }

    return (

    <div>
        <div className='displaybutton'>
            <button className='boton' onClick={cambioContadormenos}><h2>-</h2></button>
            <h2>{number}</h2>
            <button className='boton' onClick={cambioContadormas}><h2>+</h2></button>
        </div>
        <div>
            <button className='boton2' onClick={()=>onAdd(number)}><p>Agregar al carrito</p></button>
        </div>

    </div>
  )
}

export default Itemcount