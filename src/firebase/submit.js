import { addDoc, updateDoc, doc, getDoc, writeBatch , collection} from "firebase/firestore"
import { db } from "./config"
import Swal from "sweetalert2"
const guardarOrden = async (cart, orderDetail,finalAmmount,EraseCart) => {

    
    const batch = writeBatch(db)
    
    const outOfStock = []
    let cont=0
    let updatedDoc=[]
    let newStock=[]
    let cartid=[]
    let carlen=cart.length
  
    cart.forEach((cart) => {
        getDoc(doc(db, 'products', cart.id))
        .then(async (documentSnapshot) => {
            const product = {...documentSnapshot.data(), id: documentSnapshot.id};

            if (product.stock >= cart.quantity) {
                batch.update(doc(db, 'products', cart.id) ,{
                    stock: product.stock - cart.quantity
                })
                cont=cont+1
            } else {
                outOfStock.push(cart)
            }
            if (outOfStock.length === 0 && cont===carlen) {
                cartid[cont]=cart.id
                updatedDoc[cont] = doc(db, 'products', cartid[cont])
                newStock[cont] = product.stock-cart.quantity
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
                cartid[cont]=cart.id
                updatedDoc[cont] = doc(db, 'products', cartid[cont])
                newStock[cont] = product.stock-cart.quantity
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