import { useContext } from "react";
import CartContext from "../CartContext";

const TableRow = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const handleDelete = (idToDel) => {
    const newCart = cart.filter((item) => item.id !== idToDel);
    setCart(newCart);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>${props.price}</td>
      <td>
        <button onClick={() => handleDelete(props.id)}>{props.delText}</button>
      </td>
    </tr>
  );
};

export default TableRow;
