import {useState, useEffect} from 'react'
import {ItemDetail} from './ItemDetail.jsx';
import {useParams} from 'react-router-dom';
import {getProductById} from '../services/products.js';

export function ItemDetailContainer(){
  const [detail, setDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getProductById(id).then((data) => {
      if(data){
        setDetail(data);
      }else{
        throw new Error("producto no encontrado");
      }
    }).catch((err) => {
        console.log(err);
    });
  }, [id]);
  
  return (
    <main className="container">
      <section className="row mb-2">
        {Object.keys(detail).length ? (<ItemDetail detail={detail} />) : (<h3 className="pb-4 mb-4 fst-italic">cargando...</h3>)}
      </section>
    </main>
  )
}