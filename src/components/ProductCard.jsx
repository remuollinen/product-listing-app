import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [stock, setStock] = useState("");

  const availability = async (e) => {
    const clickedManufacturer = e.target.parentElement.childNodes[2].innerText;
    const productId = e.target.id.toUpperCase();

    const response = await fetch(
      `https://bad-api-assignment.reaktor.com/v2/availability/${clickedManufacturer.toLowerCase()}`
    );

    const data = await response.json();
    data.response.map((stockData) =>
      stockData.id === productId
        ? setStock(stockData.DATAPAYLOAD.split(/<|>/)[8])
        : null
    );
  };

  return (
    <div
      key={product.id}
      style={{
        margin: "30px",
        padding: "20px",
        border: "2px solid black",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>{product.name}</h3>
      <h5
        style={{ fontSize: "1.5rem", fontWeight: "500" }}
      >{`${product.price} €`}</h5>
      <h4>{`${
        product.manufacturer[0].toUpperCase() + product.manufacturer.slice(1)
      }`}</h4>
      <div style={{ display: "flex" }}>
        {product.color.map((color) => {
          return (
            <p key={color} style={{ margin: "5px" }}>
              {color}
            </p>
          );
        })}
      </div>
      <button id={product.id} onClick={availability}>
        Check availability
      </button>
      <p>{stock}</p>
    </div>
  );
};

export default ProductCard;
