import  { Link } from 'react-router-dom'

import productImage from '../../assets/products/test_producto.jpg';
export const Detail = ({ id, name, desc, stock , imageUrl}) => {

  return (
    <>
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Nombre: {name}</h5>
                <p className="card-text">Identificador: {id}</p>
                <p className="card-text">Descripcion: {desc}</p>
                <p className="card-text">Stock: {stock}</p>
                <Link to="/" className="btn btn-dark">Volver</Link>
            </div>
        </div>
    </>
  )
}
