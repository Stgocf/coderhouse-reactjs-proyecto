import { useEffect, useState } from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'
import { getProducts, getProductsFirebase } from '../productsMock/productsMock'

export const ItemList = ( { category } ) => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    setIsLoading(isLoading => true)
    //getProducts(null, category)
    getProductsFirebase(null, category)
      .then(resp => {
          console.log("guardados los productos")
          console.log(category)
          setIsLoading(isLoading => false) // lo usamos para cargar los produyctis y ocutar el CARGANDO
          setProducts(resp)
      })
      .catch(error => console.log(error))  
    }, [category])


  return (
    <>
      <div className='d-flex flex-sm-wrap'>
        {
          //isLLoading nos permite mostrar u CARGANDO o animacion mientras estamos obteniendo la info
          isLoading ? <h2>CARGANDO PRODUCTOS!</h2> : 
            products.map( product => <Item key={product.id} { ...product} > </Item> ) 
        }
      </div>
    </>
  )
}
