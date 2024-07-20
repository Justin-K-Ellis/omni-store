import { useContext } from "react";
import CartContext from "../CartContext";
import TableRow from "./TableRow";
import { FaRegTrashCan } from "react-icons/fa6";

const CartTable = () => {
  const [cart, setCart] = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          {cart?.map((item) => {
            return (
              <TableRow
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                id={item.id}
                delText={<FaRegTrashCan />}
              />
            );
          })}
          {/* Totals */}
          <TableRow
            name="Order Total"
            quantity={totalQuantity}
            price={totalPrice}
            delText=""
          />
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
