import useFetch from "../services/useFetch";
import Card from "../components/Card";
import Accordion from "../components/Accordion";
import PageTitle from "../components/PageTitle";

const Shop = () => {
  const { electronics, jewelery, mensClothing, womensClothing } = useFetch();

  const electronicsCards = electronics?.map((product) => (
    <Card
      key={product.id}
      name={product.title}
      price={product.price}
      rating={product.rating.rate}
      image={product.image}
    />
  ));

  const jeweleryCards = jewelery?.map((product) => {
    return (
      <Card
        key={product.id}
        name={product.title}
        price={product.price}
        rating={product.rating.rate}
        image={product.image}
      />
    );
  });

  const mensClothingCards = mensClothing?.map((product) => {
    return (
      <Card
        key={product.id}
        name={product.title}
        price={product.price}
        rating={product.rating.rate}
        image={product.image}
      />
    );
  });

  const womensClothingCards = womensClothing?.map((product) => {
    return (
      <Card
        key={product.id}
        name={product.title}
        price={product.price}
        rating={product.rating.rate}
        image={product.image}
      />
    );
  });

  return (
    <>
      <PageTitle text="Shop" />
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2">
        <Accordion
          electronics={electronicsCards}
          jewelery={jeweleryCards}
          mensClothing={mensClothingCards}
          womensClothing={womensClothingCards}
        />
      </div>
    </>
  );
};

export default Shop;
