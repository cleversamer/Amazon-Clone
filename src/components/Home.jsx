import React from "react";
import { genKey } from "../services";
import { products } from "../data";
import Banner from "./HomeBanner";
import Row from "./HomeRow";
import "../css/home.css";

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
