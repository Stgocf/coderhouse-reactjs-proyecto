import './Item.css'
import productImage from '../../assets/products/test_producto.jpg';
import  { ItemCounter } from '../ItemCounter/ItemCounter'
import  { Link } from 'react-router-dom'

export const Item = ( {id, name, desc, stock, imageUrl} ) => {

    return (
      <>
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text">{stock}</p>
                <ItemCounter max_stock = {stock}></ItemCounter>
                <a href="#" className="btn btn-primary">Agregar al Carrito</a>
                <Link to={`/itemDetail/${id}`} className="btn btn-dark">Ver Detalle</Link>
            </div>
        </div>
      </>
    )
  }