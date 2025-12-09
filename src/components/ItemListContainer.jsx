import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ItemList} from "./ItemList.jsx";
import {getProducts} from "../services/products.js";

function ItemListContainer({titulo}){
  const [pokemon, setPokemon] = useState([]);
  const {family} = useParams();

  useEffect(() => {
    getProducts(family).then((data) => setPokemon(data)).catch((err) => console.log(err));
  }, [family]);

  return (
    <div className="container">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">{titulo}</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-2">
        <ItemList lista={pokemon} />
      </div>
    </div>
  );
};

export {ItemListContainer}
