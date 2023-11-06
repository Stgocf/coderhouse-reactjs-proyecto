//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import carritoLogo from '../../assets/reshot-icon-shopping-cart-G4D2B9Y8EM.svg';
//import viteLogo from '/vite.svg'
import './CarWidget.css'

export const CarWidget = () => {

  return (
    <>
      <div className='carWidgetDiv'>
        <img className="img-fluid" src={carritoLogo} width="30" height="24" ></img>
        <p>Contador: 1</p>
      </div>
    </>
  )
}

