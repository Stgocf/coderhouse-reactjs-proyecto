import './App.css'
import { BrowserRouter, Routes, Route } from  'react-router-dom'

import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer > </ItemListContainer> }  />
        <Route path='/category/:category' element={ <ItemListContainer > </ItemListContainer> }  />
        <Route path='/itemDetail/:id' element={ <ItemDetailContainer></ItemDetailContainer> }  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
