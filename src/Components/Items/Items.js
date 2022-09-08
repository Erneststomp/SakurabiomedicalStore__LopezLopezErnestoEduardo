import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Items.css'
const Items = ({product}) => {
 
  const{id,title,price,image,stock}=product
  const Navegar=useNavigate();
  const Navega= ()=>{
    Navegar(`/detail/${id}`)
  }  
  //funcion que despliega la imagen de los articulos para la pagina de inciio o las paginas de clases
  let StockProof=<p className="text-muted" > Only: {stock} in Stock</p>
  if(stock===0){
    StockProof=<p className="text-muted" > Product Out of Stock</p>
  }
  return (
    <div onClick={Navega} > 
      <span className="col-lg-4 card Tarjetero" style={{width:'100%', height:'100%', display:'block'}}>
        <div className="text-center card-box" style={{position:'relative', display:'block',alignItems:'',justifyContent:'center'}}>
          <div className="member-card pt-2 pb-2">
            <div className="thumb-lg member-thumb mx-auto" style={{height:'50%'}}>
              <img src={image} className="img-thumbnail" style={{height:'300px'}} alt="Article" />
            </div>
            <div className="" >
              <h5>{title}</h5>
              {StockProof}
              <p className="text-muted" > Only: ${price}.00</p>
            </div>
          </div>
        </div>
      </span>
    </div>
  )
}

export default Items