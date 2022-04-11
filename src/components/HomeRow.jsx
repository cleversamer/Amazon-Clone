import React from "react";
import Product from "./Product";

const HomeRow = ({ products }) => {
  const getClasses = () => {
    const { length } = products;
    let classes = "home__row";
    if (length === 1) classes += " home__row-1";
    if (length === 2) classes += " home__row-2";
    if (length === 3) classes += " home__row-3";
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

export default HomeRow;
