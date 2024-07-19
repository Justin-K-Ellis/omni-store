import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";
import CartContext from "./CartContext";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <CartContext.Provider value={[cart, setCart]}>
        <main className="w-11/12 md:w-3/5 mx-auto">
          <Outlet />
        </main>
      </CartContext.Provider>
      <Footer />
    </>
  );
};

export default App;
