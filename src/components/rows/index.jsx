import React from "react";
import Row from "../common/row";

const Rows = ({ items }) => {
  return items.map((row) => <Row key={row.id} items={row.itemsList} />);
};

export default Rows;
