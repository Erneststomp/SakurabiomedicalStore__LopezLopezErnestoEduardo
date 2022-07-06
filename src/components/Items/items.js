import React from 'react'
import Itemcount from '../ItemCount/ItemCount';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import './Items.css'
const Items = ({product}) => {
  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
  }
  const{id,title,price,image}=product
  const Navegar=useNavigate();
  const Navega= ()=>{
    Navegar(`/detail/${id}`)
  }  

  return (
    <div onClick={Navega} style={{width:'50%'}}> 
      <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={image}
              className="img-thumbnail" style={{width:'300px'}}
              alt="profile-image"
            />
          </div>
          <div className="">
            <h2>{title}</h2>
            <p className="text-muted">{price}</p>
          </div>
        </div>
      </div>
    </div>
       
    </div>
  )
}

export default Items