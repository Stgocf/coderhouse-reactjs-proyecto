import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import { OrderForm } from "../OrderForm/OrderForm";

export const Cart = () => {
    const { cartItems, totalCartItems, clearCartItems, orderId} = useContext(CartContext)

    return (
        <>
            <a href="" className="btn btn-primary" onClick={ () => clearCartItems()} >Borrar Carrito</a>
            <h5>Suma total del carrito ${totalCartItems} </h5>
            <div className='d-flex flex-sm-wrap'>
                {cartItems.map( item => <CartItem key={item.id} { ...item} > </CartItem> ) }
            </div>
            <OrderForm></OrderForm>
        </>
    )
}