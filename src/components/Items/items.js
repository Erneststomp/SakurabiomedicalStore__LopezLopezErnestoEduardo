import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import './Items.css'
const Items = ({product}) => {
  const onAdd=(number)=>{
    Swal.fire('Agregaste '+ number+' a tu Carrito')
  }
  const{id,title,price,image,stock}=product
  const Navegar=useNavigate();
  const Navega= ()=>{
    Navegar(`/detail/${id}`)
  }  

  return (
    <div onClick={Navega} > 
      <span className="col-lg-4 card Tarjetero" style={{width:'100%', height:'100%', display:'block'}}>
        <div className="text-center card-box" style={{position:'relative', display:'block',alignItems:'',justifyContent:'center'}}>
          <div className="member-card pt-2 pb-2">
            <div className="thumb-lg member-thumb mx-auto" style={{height:'50%'}}>
              <img src={image} className="img-thumbnail" style={{height:'300px'}} alt="profile-image" />
            </div>
            <div className="" >
              <h5>{title}</h5>
              <p className="text-muted" > Only: {stock} in Stock</p>
              <p className="text-muted" > Only: ${price}.00</p>
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}

export default Items