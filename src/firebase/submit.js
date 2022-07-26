import { addDoc, updateDoc, doc, getDoc, writeBatch , collection} from "firebase/firestore"
import { db } from "./config"

const guardarOrden = async (cart, orderDetail) => {

    
    const batch = writeBatch(db)
    
    const outOfStock = []
    
    cart.forEach((cart) => {
        getDoc(doc(db, 'products', cart.id))
        .then(async (documentSnapshot) => {
            const product = {...documentSnapshot.data(), id: documentSnapshot.id};

            if (product.stock >= cart.quantity) {
                batch.update(doc(db, 'products', cart.id) ,{
                    stock: product.stock - cart.quantity
                })
            } else {
                outOfStock.push(cart)
            }   
        })
    })
    
            if (outOfStock.length === 0) {

                cart.forEach((cart) => {
                    getDoc(doc(db, 'products', cart.id))
                    .then(async (documentSnapshot) => {
                        const product = {...documentSnapshot.data(), id: documentSnapshot.id};
                        const updatedDoc = doc(db, 'products', cart.id)
                        let newStock = product.stock-cart.quantity
                        updateDoc(updatedDoc,{stock: newStock})
                    })
                })
                const docRef= await addDoc(collection(db,"orders"),orderDetail);
                console.log("Compra registrada con la id:", docRef.id)
                
            } 
            else{
                console.log(`Lo sentimos, el stock de los siguientes artiuclos ha cambiado: ${outOfStock}`)

            }
           

            
    
}

export default guardarOrden;