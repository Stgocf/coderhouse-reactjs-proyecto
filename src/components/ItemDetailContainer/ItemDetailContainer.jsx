import { useParams } from 'react-router-dom'
import {ItemDetail} from '../ItemDetail/ItemDetail'



export const ItemDetailContainer = () => {
    const { id } = useParams()

    return (
        <>
            <ItemDetail  id={id} ></ItemDetail>
        </>
    )
}
