import React from "react";
import { genKey } from "../../../utils/services";
import Product from "../../product";
import "./index.css";

const Row = ({ items }) => {
  const getClasses = () => {
    const { length } = items;
    let classes = "row";
    if (length === 1) classes += " row--1";
    if (length === 2) classes += " row--2";
    if (length === 3) classes += " row--3";
    return classes;
  };

  return (
    <section className={getClasses()}>
      {items.map((item) => (
        <Product key={genKey()} {...item} />
      ))}
    </section>
  );
};

export default Row;
