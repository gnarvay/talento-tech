import {useEffect, useState} from "react";
import {ItemList} from "./ItemList";

export function ItemListContainer({titulo}){
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    fetch("/data/pokemon.json")
      .then((res) => {
        if(!res.ok){
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      }).then((data) => {
        setPokemon(data);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">{titulo}</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-2">
        <ItemList lista={pokemon} />
      </div>
    </div>
  );
};