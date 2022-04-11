import React from "react";
import { genKey } from "../../../utils/services";

const Stars = ({ className, stars }) => {
  return (
    <div className={className}>
      {Array(stars)
        .fill()
        .map(() => (
          <p key={genKey()}>⭐</p>
        ))}
    </div>
  );
};

export default Stars;
