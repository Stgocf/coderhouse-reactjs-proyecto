import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"


export const OrderForm = () => {
    const { addOrder, cartItems, totalCartItems, orderId} = useContext(CartContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    

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
                <label for="name">Nombre</label>
                <input type="email" className="form-control" id="name" placeholder="Enter email"  onChange={ (e) => setName(e.target.value) }/>
            </div>
            <div className="form-group m-4">
                <label for="email">Email address</label>
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