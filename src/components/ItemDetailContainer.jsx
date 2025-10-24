import {useState, useEffect} from 'react'
import {ItemDetail} from './ItemDetail';
import {useParams} from 'react-router-dom';

export function ItemDetailContainer(){
  const [detail, setDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetch("/data/pokemon.json")
    .then((res) => {
      if(!res.ok){
        throw new Error("No se encontro el producto")
      }
      return res.json()
    })
    .then((data) => {
      const found = data.find((p) => p.id === id)
      if(found){
        setDetail(found);
      } else {
        throw new Error("Producto no encontrado")
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }, [id]);
  
  return (
    <main class="container">
      <section class="row mb-2">
        {Object.keys(detail).length ? (<ItemDetail detail={detail} />) : (<h3 className="pb-4 mb-4 fst-italic">cargando...</h3>)}
      </section>
    </main>
  )
}