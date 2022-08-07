import { addDoc, updateDoc, doc, getDoc, writeBatch , collection} from "firebase/firestore"
import { db } from "./config"
import Swal from "sweetalert2"
const guardarOrden = async (cart, orderDetail,finalAmmount) => {

    
    const batch = writeBatch(db)
    
    const outOfStock = []
    let cont=0
    let updatedDoc=[]
    let newStock=[]
    let cartid=[]
    let carlen=cart.length
    console.log(orderDetail.fechaDeCompra)
    console.log(orderDetail)
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
                    }).then( 
                       
                    ) 


                
            } 
            else if(outOfStock.length === 0){
                cartid[cont]=cart.id
                updatedDoc[cont] = doc(db, 'products', cartid[cont])
                newStock[cont] = product.stock-cart.quantity
            }
            else{
                console.log(`Lo sentimos, el stock de los siguientes artiuclos ha cambiado: ${outOfStock}`)
            }
        })
    })
    

           

            
    
}

export default guardarOrden;