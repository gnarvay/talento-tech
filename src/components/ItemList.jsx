import {Item} from "./Item.jsx";

export function ItemList({lista}){
  return (
    <>
      {lista.length ? (
        lista.map((poke) => (
          <Item {...poke} key={poke.id} />
        ))
      ) : (
        <h4 className="fst-italic">no hay productos disponibles</h4>
      )}
    </>
  );
};
