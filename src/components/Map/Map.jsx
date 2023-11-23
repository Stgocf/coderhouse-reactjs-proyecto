import { useEffect, useState } from 'react'
import { getProducts } from '../productsMock/productsMock'

export const Map = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        getProducts()
        .then(resp => {
            setProducts(resp)
            console.log("guardados los productios!")
        })
        .catch(error => console.log(error))  
        }, [])

        return(
            <div>Map</div>
        )

    }