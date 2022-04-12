import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavItems, getNavItems } from "../../store/navItems";
import { onSnapshot } from "firebase/firestore";
import { navItemsQuery } from "../../firebase";
import { genKey } from "../../utils/services";
import { Spinner } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Navigation = () => {
  const dispatch = useDispatch();
  const navItems = useSelector(getNavItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onSnapshot(navItemsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(fetchNavItems(data));
      setLoading(false);
    });
  }, []);

  const getClasses = () =>
    `navbar__navigation${loading ? " navbar__navigation--loading" : ""}`;

  return (
    <ul className={getClasses()}>
      {loading ? (
        <div className="navbar__navigation-spinner">
          <Spinner size="md" />
        </div>
      ) : (
        navItems?.map((item) => (
          <NavLink
            key={genKey()}
            line1={item.line1}
            line2={item.line2}
            path={item.path || "/"}
          />
        ))
      )}
    </ul>
  );
};

export default Navigation;
