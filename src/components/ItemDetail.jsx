import {useCartContext} from "../context/CartContext";
import {ucfirst} from "../utils.js";

export function ItemDetail({detail}){
  const {addItem} = useCartContext();
  return (
    <div className="col-md-4">
      <div className="row g-0 border rounded flex-md-row mb-4 shadow-sm position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{ucfirst(detail.id)}</h3>
          <strong className="my-2 text-primary-emphasis">{detail.category}</strong> 
          <div className="mb-1 text-body-secondary">${detail.price}</div>
          <p className="card-text mb-3">{detail.description}</p>
          <button onClick={() => addItem(detail)} className="btn btn-success">agregar al carrito</button>
          <img src={detail.imageUrl} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}
