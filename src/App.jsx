import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";
import {ItemListContainer} from "./components/ItemListContainer";
import {CartProvider} from './context/CartContext';
import {Cart} from "./components/Cart";
import {ProductFormContainer} from "./components/adminComponents/ProductFormContainer";
import {MainLayout} from "./layouts/MainLayout";
import {AdminLayout} from "./layouts/AdminLayout";
import {RutaProtegida} from "./components/RutaProtegida";
import {Login} from "./components/Login";

export default function App(){
  return (
    <>
      <BrowserRouter>
        <CartProvider>

          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer titulo={"Tu aventura Pokemon empieza aquí"} />} />
              <Route path="/familia/:family" element={<ItemListContainer titulo={"Todas las líneas evolutivas en un solo lugar"} />} /> 
              <Route path="/pokemon/:id" element={<ItemDetailContainer />} /> 
              <Route path="/carrito" element={<Cart/>} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route path="alta-productos" element={<RutaProtegida><ProductFormContainer /></RutaProtegida>} />
            </Route>
          </Routes>

        </CartProvider>
      </BrowserRouter>
    </>
  );
}
