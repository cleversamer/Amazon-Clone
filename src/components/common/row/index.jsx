import React from "react";
import Product from "../../product";
import "./index.css";

const Row = ({ products }) => {
  const getClasses = () => {
    const { length } = products;
    let classes = "row";
    if (length === 1) classes += " row--1";
    if (length === 2) classes += " row--2";
    if (length === 3) classes += " row--3";
    return classes;
  };

  return (
    <section className={getClasses()}>
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Row;
