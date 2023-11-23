//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import { CiShoppingCart } from "react-icons/ci";
//import viteLogo from '/vite.svg'
import './CarWidget.css'

export const CarWidget = () => {

  return (
    <>
      <div className='carWidgetDiv d-flex'>
        <CiShoppingCart />  
        <p>Contador: 1</p>
      </div>
    </>
  )
}

