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
        <form>
            <div className="form-group">
                <label for="name">Nombre</label>
                <input type="email" className="form-control" id="name" placeholder="Enter email"  onChange={ (e) => setName(e.target.value) }/>
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email"  placeholder="Enter email"  onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleForm}>Comprar Carrito</button>
        </form>
        </>
    )
}