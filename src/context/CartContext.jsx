import {useState, createContext, useContext} from "react";
// ..........................................
const CartContext = createContext();
// ..........................................
function CartProvider({children}){
  const[cart, setCart] = useState([]);
  
  function exists(id){
    const exist = cart.some((p) => p.id === id);
    return exist
  }
  
  function addItem(item){
    if(exists(item.id)){
      alert('El producto ya existe en el carrito');
      return;
    }
    setCart([...cart, item]);
    alert(`${item.id} agregado al carrito`)
  }

  function clearCart(){
    setCart([]);
  }

  function getTotalItems(){
    if(cart.length){
      return cart.length;
    }
  }

  const values = {cart, addItem, clearCart, getTotalItems}
  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}
// ..........................................
function useCartContext(){
  return useContext(CartContext);
}
// ..........................................
export {CartProvider, useCartContext};
