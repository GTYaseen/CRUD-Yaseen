import { useEffect, useState } from "react";
import "./App.css";
import Get from "./components/get/Get";
import Add from "./components/add/NewProduct";
import Container from "./components/containter/Container";
import Header from "./components/header/Header";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const getProducts = async () => {
    try {
      let resp = await fetch(`https://dummyjson.com/products/search?q=${search}`);
      let data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [search]); // Run useEffect whenever the search term changes

  const handleSearch = () => {
    getProducts(); // Trigger product fetching when the search button is clicked
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header />
      <br />
      <Container>
        <div className="search">
          <div className="search-box">
            <SearchOutlined style={{paddingLeft:"10px"}}/>
            <Input
              placeholder="Find product"
              style={{ width: 200, border: "none", outline: "none" }}
              onChange={handleInputChange}
              value={search}
            />
          </div>
          <Add />
        </div>
        <br />
        <Get products={products} />
      </Container>
    </>
  );
}

export default App;
