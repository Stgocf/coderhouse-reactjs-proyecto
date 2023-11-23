import { useParams } from 'react-router-dom'
import {ItemDetail} from '../ItemDetail/ItemDetail'



export const ItemDetailContainer = ({greeting}) => {
    const { id } = useParams()

    return (
        <>
        <p>Iten Detail Container</p>
        <ItemDetail  id={id} ></ItemDetail>
        </>
    )
}
