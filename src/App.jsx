import { useEffect, useState } from "react";
import "./App.css";
import Get from "./components/get/Get";
import Add from "./components/add/NewProduct";

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let resp = await fetch(`https://dummyjson.com/products?limit=30`);
      let data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Add />
      <Get products={products} />
    </>
  );
}

export default App;
