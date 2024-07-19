import { useContext } from "react";
import CartContext from "../CartContext";
import { nanoid } from "nanoid";

const Card = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const handleClick = (item) => {
    const newItem = { ...item, quantity: 1, id: nanoid() };
    setCart(cart.concat(newItem));
  };

  return (
    <div className="card bg-base-100 w-full grow shadow-xl p-2 my-2">
      <div className="flex flex-row">
        <figure className="w-1/3">
          <img
            className="object-contain max-h-40 rounded-md border-solid border-accent"
            src={props.image}
            alt={props.name}
          />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title text-sm md:text-base font-bold">
            {props.name}
          </h2>
          <p>{props.price} USD</p>
          <p>Rating: {props.rating}/5</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-secondary"
              onClick={() => handleClick(props)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
