import {useCartContext} from "../context/CartContext.jsx";
import {Count} from "./Count.jsx"
import {ucfirst} from "../utils.js";

export function ItemDetail({detail}){
  const {addItem} = useCartContext();
  const handleAdd = (quantity) => {
    addItem({...detail, quantity});
  };

  return (
    <div className="col-md-4">
      <div className="row g-0 border rounded flex-md-row mb-4 shadow-sm position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <h3 className="mb-0">{ucfirst(detail.name)}</h3>
          <strong className="my-2 text-primary-emphasis">{detail.family}</strong> 
          <div className="mb-1 text-body-secondary">${detail.price}</div>
          <p className="card-text mb-3">{detail.description}</p>
          <Count btnText={"agregar al carrito"} onConfirm={handleAdd} />
          <img src={detail.imageUrl} className="img-fluid" />
        </div>
      </div>
    </div>
  )
}
