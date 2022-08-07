import React from 'react'
import './ItemCount.css'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Itemcount = ({onAdd, Stock, initial}) => {
    const navigate = useNavigate();
    const [number,setNumber] = React.useState(initial);
    const returnPage=()=>{
        navigate('/')
      }
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

    let buttonProof=<button className="btn btn-primary btn-lg button__align" onClick={()=>onAdd(number)}><p>Add to Cart</p></button>
    if(Stock===0){
        buttonProof=<button id="BtnRegresar" className="btn btn-danger btn-lg button__align" onClick={returnPage}>Out of Stock Go Back</button>
    }

    return (

    <div>
        <div className='displaybutton'>
            <button style={{ margin:'10px'}} className="btn btn-primary btn-lg button__align" onClick={cambioContadormenos}><h2>-</h2></button>
            <h2 style={{ margin:'10px', alignItems:'center', alignSelf:'center', alignContent:'cemter'}} >{number}</h2>
            <button style={{ margin:'10px'}} className="btn btn-primary btn-lg button__align" onClick={cambioContadormas}><h2>+</h2></button>
        </div>
        <div>
            {buttonProof}
        </div>

    </div>
  )
}

export default Itemcount