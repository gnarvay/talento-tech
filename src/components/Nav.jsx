import {Link} from "react-router-dom";
import {useCartContext} from '../context/CartContext'

export function Nav(){
  const {getTotalItems} = useCartContext();
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/category/salado"}>Salado</Link>
        </li>
        <li>
          <Link to={"/category/dulce"}>Dulce</Link>
        </li>
        <li>
          <Link to={"/carrito"}>🛒</Link>
          {getTotalItems() > 0 && (<span>{getTotalItems()}</span>)}
        </li>
      </ul>
    </nav>
  );
};
