import './App.css'
import { BrowserRouter, Routes, Route } from  'react-router-dom'

import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import { Cart } from './components/Cart/Cart'


const App = () => {
  return (
    
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer > </ItemListContainer> }  />
            <Route path='/category/:category' element={ <ItemListContainer > </ItemListContainer> }  />
            <Route path='/itemDetail/:id' element={ <ItemDetailContainer></ItemDetailContainer> }  />
            <Route path='/cart' element={ <Cart></Cart> }></Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>

  )
}

export default App
