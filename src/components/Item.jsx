import {Link} from "react-router-dom";
import {ucfirst} from "../utils.js";

export function Item(props){
  const {id, price, category, description, imageUrl} = props;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={imageUrl} className="card-img-top" />
        <div className="card-body">
          <h3 className="mb-0">{ucfirst(id)}</h3>
          <strong className="d-block my-2 text-primary-emphasis">Categoría: {category}</strong>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <Link className="btn btn-success btn-sm" to={`/pokemon/${id}`}>comprar</Link>
            <h4 className="fst-italic">${price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
