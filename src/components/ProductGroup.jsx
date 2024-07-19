import Card from "./Card";

const ProductGroup = ({ products, category }) => {
  if (products !== null) {
    console.log(products);
  } else {
    console.log("no products");
  }
  return (
    <>
      <h2>{category}</h2>
      {products?.map((product) => {
        // if (product.category === category) {
        <p key={product.id}>{product.name}</p>;
        // <Card
        //   key={product.id}
        //   name={product.title}
        //   description={product.description}
        //   image={product.image}
        // />;
        // }
      })}
    </>
  );
};

export default ProductGroup;
