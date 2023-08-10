import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/home";
import NavBar from "./components/navBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./context/cart/cartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          {/* <Route exact path="/" element={<ItemListContainer />} /> */}
          <Route exact path="/" element={<Home title="Esta es la ruta home" />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
