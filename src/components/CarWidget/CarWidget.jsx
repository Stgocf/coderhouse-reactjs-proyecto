//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import { CiShoppingCart } from "react-icons/ci";
//import viteLogo from '/vite.svg'
import './CarWidget.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CarWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  return (
    <>
      <div className='carWidgetDiv d-flex'>
        <CiShoppingCart />  
        <p>{totalQuantity}</p>
      </div>
    </>
  )
}

