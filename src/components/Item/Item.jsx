import './Item.css'
import productImage from '../../assets/products/test_producto.jpg';
import  { ItemCounter } from '../ItemCounter/ItemCounter'
import  { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Item = ( {id, name, desc, stock, imageUrl, price} ) => {

    const { addItem } = useContext(CartContext)

    return (
      <>
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Description: {desc}</p>
                <p className="card-text">Stock: {stock}</p>
                <p className="card-text">Price: {price}</p>
                <ItemCounter max_stock = {stock}></ItemCounter>
                <a href="#" className="btn btn-primary" onClick={ () => addItem( {id, name, price}, 1  )} >Agregar al Carrito</a>
                <Link to={`/itemDetail/${id}`} className="btn btn-dark">Ver Detalle</Link>
            </div>
        </div>
      </>
    )
  }