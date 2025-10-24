import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {ItemDetailContainer} from "./components/ItemDetailContainer";
import {ItemListContainer} from "./components/ItemListContainer";
import {CartProvider} from './context/CartContext';

export default function App(){
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />

          <Routes>
            <Route path="/" element={<ItemListContainer titulo={"Tu aventura Pokemon empieza aquí"} />} />
            <Route path="/pokemon/:id" element={<ItemDetailContainer />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}
