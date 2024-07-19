import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";
import CartContext from "./CartContext";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <p>Omni Shop: have it all</p>
      <CartContext.Provider value={[cart, setCart]}>
        <main className="w-11/12 md:w-3/5 mx-auto">
          <Outlet />
        </main>
      </CartContext.Provider>
    </>
  );
};

export default App;
