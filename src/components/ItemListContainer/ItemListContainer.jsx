
import {ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {
  const { category } = useParams()

  return (
    <>
      <div className = 'container d-flex flex-column align-items-center'>
        <ItemList  category={category}></ItemList>
      </div>
    </>
  )
}
