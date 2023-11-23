import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from  'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer > </ItemListContainer> }  />
        <Route path='/itemDetail/:id' element={ <ItemDetailContainer></ItemDetailContainer> }  />
      </Routes>
    </BrowserRouter>
    /*<>
      <div className='appDiv'>
        <NavBar />
        <ItemListContainer greeting='Bienvenidos a mi ecommerce de joyería'/>
        <ItemDetailContainer></ItemDetailContainer>
      </div>
    </>
    */
  )
}

export default App
