import {createContext, useContext, useState} from "react";
/* ..................................... */

const CartContext = createContext();

/* ..................................... */

function CartProvider({children}){
  const [cart, setCart] = useState([]);
  /* ------------------------------------------------------------- */
  function exists(id){
    const exist = cart.some(p => p.id === id);
    return exist;
  };
  /* ------------------------------------------------------------- */
  function addItem(item){
    if(exists(item.id)){
      const updatedCart = cart.map((prod) => {
        if(prod.id === item.id){
          return {...prod, quantity: prod.quantity + item.quantity};
        }else{
          return prod;
        }
      });
      setCart(updatedCart);
      alert('agregado al carrito');
    } else {
       setCart([...cart, item]);
       alert(`${item.name} agregado`);
    }
  };
  /* ------------------------------------------------------------- */
  function deleteItem(id){
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert('producto eliminado');
  };
  /* ------------------------------------------------------------- */
  function clearCart(){
    setCart([])
  }
  /* ------------------------------------------------------------- */
  function getTotalItems(){
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };
  /* ------------------------------------------------------------- */
  function total(){
     const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
     return Math.round(total * 100) / 100;
  };
  /* ------------------------------------------------------------- */
  function checkout(){
    const ok = confirm('¿serguro que quiere finalizar la compra?');
    if(ok){
      alert("¡compra realizada con éxito!");
      clearCart();
    }
  };
  /* ------------------------------------------------------------- */
  const values = {cart, addItem, clearCart, getTotalItems, deleteItem, total, checkout}
  /* ------------------------------------------------------------- */
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}

/* ..................................... */

function useCartContext(){
  return useContext(CartContext);
}

/* ..................................... */

export {CartProvider, useCartContext}
