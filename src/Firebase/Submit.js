import { addDoc, updateDoc, doc, getDoc, writeBatch , collection} from "firebase/firestore"
import { db } from "./Config"
import Swal from "sweetalert2"
const guardarOrden = async (CartVariable, orderDetail,finalAmmount,EraseCart) => {

    
    const batch = writeBatch(db)
    
    const outOfStock = []
    let cont=0
    let updatedDoc=[]
    let newStock=[]
    let CartVariableid=[]
    let carlen=CartVariable.length
  
    CartVariable.forEach((CartVariable) => {
        getDoc(doc(db, 'products', CartVariable.id))
        .then(async (documentSnapshot) => {
            const product = {...documentSnapshot.data(), id: documentSnapshot.id};

            if (product.stock >= CartVariable.quantity) {
                batch.update(doc(db, 'products', CartVariable.id) ,{
                    stock: product.stock - CartVariable.quantity
                })
                cont=cont+1
            } else {
                outOfStock.push(CartVariable)
            }
            if (outOfStock.length === 0 && cont===carlen) {
                CartVariableid[cont]=CartVariable.id
                updatedDoc[cont] = doc(db, 'products', CartVariableid[cont])
                newStock[cont] = product.stock-CartVariable.quantity
                const docRef= await addDoc(collection(db,"orders"),orderDetail);
                for(let i=1;cont>=i;i++){
                updateDoc(updatedDoc[i],{stock: newStock[i]})  }
                let docRefid=docRef.id

                Swal.fire({
                    title: 'Your Purchase Has Been Finished',
                    html:
                    `<h2 id="swal-input1" class="swal2-input"> Order: ${docRefid} </h2>` +
                    `<h2 id="swal-input1" class="swal2-input"> Total Ammount to Pay: ${finalAmmount} </h2>`+
                    `<h2 id="swal-input1" class="swal2-input"> Fecha de Compra: ${orderDetail.order.fechaDeCompra} </h2>`,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    }).then((result)=>{ if (result.isConfirmed) {
                        EraseCart()
                        window.location = '/'
                      }}
                       
                    ) 


               
            } 
            else if(outOfStock.length === 0){
                CartVariableid[cont]=CartVariable.id
                updatedDoc[cont] = doc(db, 'products', CartVariableid[cont])
                newStock[cont] = product.stock-CartVariable.quantity
            }
            else{
                for(let i=0;i<outOfStock.length;i++ ){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Item without enough stock: ${outOfStock[i].title}`,
                    })
                }
            }
        })
    })
    

           

            
    
}

export default guardarOrden;