import CartTable from "../components/CartTable";
import PageTitle from "../components/PageTitle";

const Cart = () => {
  return (
    <>
      <PageTitle text="Your Cart" />
      <CartTable />
      <div className="flex justify-end mt-2">
        <button className="btn btn-secondary">Checkout</button>
      </div>
    </>
  );
};

export default Cart;
