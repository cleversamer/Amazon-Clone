import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSnapshot } from "firebase/firestore";
import { itemsQuery } from "../../firebase";
import { addItems, getItems } from "../../store/items";
import Banner from "../common/banner";
import Rows from "../rows";
import { Spinner } from "@chakra-ui/react";
import "./index.css";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onSnapshot(itemsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(addItems(data));
      setTimeout(() => setLoading(false), 1000);
    });
  }, []);

  return (
    <div className="home">
      <Banner />

      {loading ? (
        <div className="home__spinner">
          <Spinner size="xl" />
        </div>
      ) : (
        <Rows items={items} />
      )}
    </div>
  );
};

export default Home;
