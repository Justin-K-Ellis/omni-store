import { useContext } from "react";
import CartContext from "../CartContext";
import TableRow from "./TableRow";

const CartTable = () => {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log("total quant", totalQuantity);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {cart?.map((item) => {
            return (
              <TableRow
                key={item.id}
                title={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            );
          })}
          {/* Totals */}
          <TableRow
            title="Order Total"
            quantity={totalQuantity}
            price={totalPrice}
          />
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
