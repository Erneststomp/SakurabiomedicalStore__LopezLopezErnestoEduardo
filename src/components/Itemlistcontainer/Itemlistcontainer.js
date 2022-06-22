import React from 'react'
import Logo2 from "../assets/Images/desfibrilador.webp"

const itemlistcontainer = ({greeting}) => {
  return (
    <div>
      <p>{greeting}</p>    
      <br/>  
      <img  src={Logo2} alt="" width={400}/> 
    </div>
  )
}

export default itemlistcontainer