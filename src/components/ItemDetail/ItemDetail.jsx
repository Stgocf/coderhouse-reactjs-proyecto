import { useEffect, useState } from 'react'
import { getProducts } from '../productsMock/productsMock'
import { Detail } from '../Detail/Detail'


export const ItemDetail = ({ id }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect( () => {
      getProducts(id)
        .then(resp => {
            console.log("guardados producto especifico!")
            console.log(resp)
            setIsLoading(isLoading => false) // lo usamos para cargar los produyctis y ocutar el CARGANDO
            setProducts(resp)
        })
        .catch(error => console.log(error))  
      }, [])

  return (
    <>
        <div className="d-flex">
            <h2>Productos from map function</h2>
            {
            //isLLoading nos permite mostrar u CARGANDO o animacion mientras estamos obteniendo la info
            isLoading ? <h2>CARGANDO DETLLE PRODUCTO ESPECIFICO!</h2> : 
                products.map( product => <Detail key={product.id} {...product} > </Detail> ) 
            }
        </div>
    </>
  )
}
