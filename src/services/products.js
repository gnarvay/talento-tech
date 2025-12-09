const BASE_URL = "https://692a7e0d7615a15ff24cd318.mockapi.io/pokemon";
/* ................................................. */

async function createProduct(pokemon){
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(pokemon)
  });
  if(!res.ok){
    throw new Error("no se pudo crear el producto");
  }
  const result = await res.json();
  console.log(JSON.stringify(pokemon));
  console.log(result);
  return result;
};
/* ................................................. */

async function getProducts(family){
  let url = BASE_URL;
  if(family){
    url = `${BASE_URL}?family=${family}`;
  }
  const res = await fetch(url);
  if(!res.ok){
    throw new Error("error al listar productos");
  }
  const results = await res.json();
  return results;
};
/* ................................................. */

async function getProductById(id){
  const res = await fetch(`${BASE_URL}/${id}`);
  if(!res.ok){
    throw new Error("error al obtener el producto");
  }
  return await res.json();
}
/* ................................................. */

export {createProduct, getProducts, getProductById}
