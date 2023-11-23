
import {ItemList} from '../ItemList/ItemList'


export const ItemListContainer = ({greeting}) => {

  return (
    <>
      <p>greeting : {greeting}</p>
      <ItemList></ItemList>
    </>
  )
}
