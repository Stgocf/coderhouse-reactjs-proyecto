import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartItem = ({id, name, quantity, subTotal, price}) => {

    const { removeItem } = useContext(CartContext)

    return (
        <>
        <div className="card"  >
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Price: {price}</p>
                <p className="card-text">Quantity:  {quantity}</p>
                <p className="card-text">subTotal: {subTotal}</p>
                <a href="#" className="btn btn-primary" onClick={() => removeItem(id)} >Eliminar</a>
            </div>
        </div>
        </>
    )
    

}