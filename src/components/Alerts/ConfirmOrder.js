import React, {  useContext, useState } from 'react'
import {useNavigate} from "react-router-dom";
import { Shop } from '../Context/Context.js';
import guardarOrden from '../../Firebase/Submit';
const ConfirmOrder = () => {
  const {setConfirmOrder}= useContext(Shop)
  const {CartVariable}= useContext(Shop)
  const {finalAmmount}= useContext(Shop)
  const navigate = useNavigate();
  const {EraseCart}= useContext(Shop)
  const [hiddename, setHiddenname]=useState('')
  const [hiddeAdress, setHiddenAdress]=useState('')
  const [hiddenphone, setHiddennphone]=useState('')
  const [hiddenemail, setHiddenemail]=useState('')
  
  const Confirmation=()=> {
    const data={
        fullname: document.getElementById("NAME").value,
        adress: document.getElementById("ADRESS").value,
        email: document.getElementById("EMAIL1").value,
        contact: document.getElementById("PHONENUMBER").value,
    };

    if(data.fullname!==''&&data.adress!==''&&data.contact!==''&& isNaN(data.contact)===false && data.contact.length===10 && data.fullname.length>6 &&data.adress.length>6){
        const orderDetail={ order:{data, total:finalAmmount, fechaDeCompra: new Date().toLocaleString(), CartVariable}}
        guardarOrden(CartVariable,orderDetail,finalAmmount,EraseCart)
    }
}


  const returnPage=()=>{
    setConfirmOrder(0)
    navigate('/ElementsInCart')
  }

  const handleSubmit = event => {
    event.preventDefault();
  };

const allcheck=()=>{
    if(document.getElementById("EMAIL1").value===document.getElementById("EMAIL2").value && document.getElementById("EMAIL2").value!==''&& document.getElementById("NAME").value!==''&& document.getElementById("ADRESS").value!==''&&document.getElementById("PHONENUMBER").value!==''&& document.getElementById("PHONENUMBER").value.length===10){
        document.getElementById("BtnFinalizar").disabled=false
    }
    else{
        document.getElementById("BtnFinalizar").disabled=true 
    }
}
  
  const emailcheck=()=>{
    if(document.getElementById("EMAIL2").value!==document.getElementById("EMAIL1").value ){
        setHiddenemail("Email did't match")
    }else {
        setHiddenemail("")
    }
    if(document.getElementById("EMAIL2").value===''){
        setHiddenemail("")
    }
    allcheck()
  }
  const namecheck=()=>{
    if( document.getElementById("NAME").value.length<6&&document.getElementById("NAME").value!==''){
        setHiddenname('Fullname cant be less than 6 character')
        
    }
    else{
        setHiddenname('')
    }
    allcheck()
  }

  const adresscheck=()=>{
    if(document.getElementById("ADRESS").value.length<6 &&document.getElementById("ADRESS").value.length>0){
        setHiddenAdress("Adress can't be less than 6 character")
        document.getElementById("BtnFinalizar").disabled=true
    }
    else{
        setHiddenAdress('')
    }
    allcheck()
  }

  const phonecheck=()=>{
    if((document.getElementById("PHONENUMBER").value.length<10&&document.getElementById("PHONENUMBER").value.length>0)||isNaN(document.getElementById("PHONENUMBER").value)===true){
        setHiddennphone("Phone number must be 10 numbers length and it can only be numerical")
        document.getElementById("BtnFinalizar").disabled=true
    }
    else{
        setHiddennphone('')}
        allcheck()
  }

  return (
    <div >
       <form  onSubmit={handleSubmit}>
                <div className="container">
                    <div className="name">
                        <h2 className="fs-4 text-left">Shipment Details</h2>
                    <div>
                        <div>
                            <label> Name: <p style={{color:'red'}}>{hiddename}</p>  </label>
                            <input type="text" id="NAME" name="Name" placeholder="Example: Jon Doe" onChange={namecheck}  minLength="6" className="form-control" required/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Adress: <p style={{color:'red'}}>{hiddeAdress}</p> </label>
                            <input id="ADRESS" name="adress" type="text" placeholder="Example: Fake Av. 666" onChange={adresscheck} className="form-control" required/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Email:  </label>
                            <input id="EMAIL1" name="Email" type="email" placeholder="Example: fake@mail.com" onChange={emailcheck} className="form-control" required/>
                        </div>
                        <div><label>Confirm Email: <p style={{color:'red'}}>{hiddenemail}</p></label>
                            <input id="EMAIL2" name="Email" type="email" placeholder="Example: fake@mail.com" onChange={emailcheck} className="form-control" required/>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Phone Number <p style={{color:'red'}}>{hiddenphone}</p></label>
                            <input id="PHONENUMBER"  name="PHONENUMBER" type="text" placeholder="7222182727" onChange={phonecheck} maxLength="10" size="999999999" pattern="[0-9]+" className="form-control"  required/>
                        </div>
                    </div>

                    
                    <div > 
                            <div className="col-md-12 col-sm-12 col-xs-12 text-center" >
                                <button style={{margin:'100px'}}  id="BtnFinalizar" className="btn btn-primary btn-lg button__align"  onClick={Confirmation}>Done</button>
                                <button style={{margin:'100px'}} id="BtnRegresar" className="btn btn-danger btn-lg button__align" onClick={returnPage}>Back</button>
                            </div>
                    </div>                       
                </div> 
            </div>
        </form>
    </div>
  )
}

export default ConfirmOrder