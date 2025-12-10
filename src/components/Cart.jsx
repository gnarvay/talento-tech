import {Link} from "react-router-dom";
import {useCartContext} from "../context/CartContext";
import {Item} from "./Item.jsx";
import {ucfirst} from "../utils.js";

export function Cart(){
  const {cart, clearCart, deleteItem, total, checkout} = useCartContext();

  return (
    <section className="container">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">Carrito de Compras</h3>
      <div className="row row-cols-1 mb-2">

      {cart.length ? (
        <div className="table-responsive-md">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((prod) => (
                <tr key={prod.id}>
                  <th scope="row">{ucfirst(prod.name)}</th>
                  <td>{prod.description}</td>
                  <td>${prod.price}</td>
                  <td>{prod.quantity}</td>
                  <td><button type="button" className="btn btn-danger btn-sm" onClick={() => deleteItem(prod.id)}>eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h5>Pikachu está triste, carrito vacío</h5>
      )}

      {cart.length ? (
        <>
          <h4 className="d-flex justify-content-between align-items-center mb-3"><span className="text-primary">Resumen Carrito</span></h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div><h6 className="my-0">Total a pagar:</h6></div>
              <span className="text-body-secondary">${total()}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div><button className="btn btn-success" onClick={checkout}>finalizar compra</button></div>
              <div><button className="btn btn-secondary" onClick={clearCart}>vaciar carrito</button></div>
            </li>
          </ul>
        </>
      ) : (
        <Link className="btn btn-warning" to="/">volver al inicio</Link>
      )}


      </div>
    </section>
  );
};

