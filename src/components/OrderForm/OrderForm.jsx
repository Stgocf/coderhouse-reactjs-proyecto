import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { serverTimestamp, addDoc, collection } from "firebase/firestore"
import { db } from "../../config/firebaseConfig"

export const OrderForm = () => {
    const {cartItems, totalCartItems} = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")
    
    const addOrder = (cartItems, userData, totalCartItems) => { 
        const newOrder = {
          buyer: userData,
          items: cartItems,
          data: serverTimestamp(),
          totalCartItems
        }
        addDoc( collection(db, "orders"), newOrder )
          .then(docRef => {
            setOrderId(docRef.id)
          })
          .catch( error => {
            console.log(error)
          })
      }

    const handleForm = (e) => {
        e.preventDefault()
        addOrder(cartItems, {name,email}, totalCartItems )
        setName("")
        setEmail("")
    }

    return (
        <>
        <form className="d-flex m-4">
            <div className="form-group m-4">
                <label htmlFor="name">Nombre</label>
                <input type="email" className="form-control" id="name" placeholder="Enter email"  onChange={ (e) => setName(e.target.value) }/>
            </div>
            <div className="form-group m-4">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email"  placeholder="Enter email"  onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <button type="submit" className="btn btn-primary m-4" onClick={handleForm}>Comprar Carrito</button>
        </form>
        {orderId && (
            <div>
                <p>Order ID Firebase: {orderId}</p>
            </div>
            )}
        </>
    )
}