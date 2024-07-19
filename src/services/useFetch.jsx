import { useEffect, useState } from "react";

const useFetch = () => {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);

  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        const fetchedElectronics = data.filter(
          (product) => product.category === "electronics"
        );
        const fetchedJewelery = data.filter(
          (product) => product.category === "jewelery"
        );
        const fetchedMensClothing = data.filter(
          (product) => product.category === "men's clothing"
        );
        const fetchedWomensClothing = data.filter(
          (product) => product.category === "women's clothing"
        );
        setElectronics(fetchedElectronics);
        setJewelery(fetchedJewelery);
        setMensClothing(fetchedMensClothing);
        setWomensClothing(fetchedWomensClothing);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return { electronics, jewelery, mensClothing, womensClothing };
};

export default useFetch;
