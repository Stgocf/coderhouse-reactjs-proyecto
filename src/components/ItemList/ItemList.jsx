import { useEffect, useState } from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'
import { getProducts } from '../productsMock/productsMock'

export const ItemList = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    getProducts()
      .then(resp => {
          console.log("guardados los productios!")
          setIsLoading(isLoading => false) // lo usamos para cargar los produyctis y ocutar el CARGANDO
          setProducts(resp)
      })
      .catch(error => console.log(error))  
    }, [])


  return (
    <>
      <div className='itemListDiv d-flex'>
        
        <h2>Productos from map function</h2>
        {
          //isLLoading nos permite mostrar u CARGANDO o animacion mientras estamos obteniendo la info
          isLoading ? <h2>CARGANDO PRODUCTOS!</h2> : 
            products.map( product => <Item key={product.id} { ...product} > </Item> ) 
        }
      </div>
    </>
  )
}
