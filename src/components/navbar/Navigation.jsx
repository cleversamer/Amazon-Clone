import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavItems, getNavItems } from "../../store/navItems";
import { onSnapshot } from "firebase/firestore";
import { navItemsQuery } from "../../firebase";
import { genKey } from "../../utils/services";
import NavLink from "./NavLink";

const Navigation = () => {
  const dispatch = useDispatch();
  const navItems = useSelector(getNavItems);

  useEffect(() => {
    onSnapshot(navItemsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(fetchNavItems(data));
    });
  }, []);

  return (
    <ul className="navbar__navigation">
      {navItems?.map((item) => (
        <NavLink
          key={genKey()}
          line1={item.line1}
          line2={item.line2}
          path={item.path || "/"}
        />
      ))}
    </ul>
  );
};

export default Navigation;
