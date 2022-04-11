import React from "react";
import { genKey } from "../../utils/services";
import { products } from "../../utils/data";
import Banner from "../common/banner";
import Row from "../common/row";
import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      {products.map((row) => (
        <Row key={genKey()} products={row} />
      ))}
    </div>
  );
};

export default Home;
