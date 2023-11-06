//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {

  return (
    <>
      <div className='itemListDiv'>
        <p>greeting : {greeting}</p>
      </div>
    </>
  )
}
