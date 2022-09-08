import React from 'react'
import {useNavigate} from "react-router-dom";


const NotFoud = () => {
  const navigate = useNavigate();
  const IrATienda =()=>{
    navigate('/')
  }

  return (
    //funcion que muestra si una ruta especifica existe o no, de no hacerlo mostrara un boton que permite redireccionar a la pagina inicial
    <div style={{margin:'100px'}}>
        <h1>Error 404</h1>
        <h2>Page not Found</h2>
        <button  onClick={IrATienda} style={{margin:'50px'}} className="btn btn-primary btn-lg button__align">Go to Store</button>
      </div>
  )
}

export default NotFoud