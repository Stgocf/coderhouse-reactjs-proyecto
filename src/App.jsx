import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <>
      <div className='appDiv'>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a mi ecommerce de joyería'/>
      </div>
    </>
  )
}

export default App
