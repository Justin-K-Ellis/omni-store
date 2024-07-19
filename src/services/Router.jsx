import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

export default router;
