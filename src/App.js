import React, { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [header, setHeader] = useState("Products");

  const fetchGloves = async () => {
    const response = await fetch(
      "https://bad-api-assignment.reaktor.com/v2/products/gloves"
    );
    const data = await response.json();

    setProducts(data);
    setHeader(data[0].type[0].toUpperCase() + data[0].type.slice(1));
  };

  const fetchMasks = async () => {
    const response = await fetch(
      "https://bad-api-assignment.reaktor.com/v2/products/facemasks"
    );
    const data = await response.json();

    setProducts(data);
    setHeader(data[0].type[0].toUpperCase() + data[0].type.slice(1));
  };

  const fetchBeanies = async () => {
    const response = await fetch(
      "https://bad-api-assignment.reaktor.com/v2/products/beanies"
    );
    const data = await response.json();

    setProducts(data);
    setHeader(data[0].type[0].toUpperCase() + data[0].type.slice(1));
  };

  return (
    <div className="App">
      <Categories
        fetchGloves={fetchGloves}
        fetchMasks={fetchMasks}
        fetchBeanies={fetchBeanies}
      />
      <Products header={header} products={products} />
    </div>
  );
}

export default App;
