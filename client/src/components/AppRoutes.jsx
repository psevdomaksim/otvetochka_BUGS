import React, { useContext, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  HOME_PAGE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/routes_consts";
import { authRoutes, publicRoutes } from "../routes";
import { StoreContext } from "..";
import { Spinner } from "react-bootstrap";

const AppRoutes = () => {
  const store = useContext(StoreContext);

  const [isAuth, setIsAuth] = useState();
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  store.subscribe(() => {
    setIsAuth(store.getState().authPage.isAuth);
    setLoading(store.getState().authPage.isLoading);
    console.log(loading)
  });

  if (loading) {
    return <Spinner animation="grow" />;
  }

  if (
    (location.pathname === LOGIN_ROUTE && isAuth === true) ||
    (location.pathname === REGISTRATION_ROUTE && isAuth === true)
  ) {
    return <Navigate to={HOME_PAGE_ROUTE} />;
  }

  return (
    <Routes>
      {isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}

      <Route path="*" element={<Navigate to={HOME_PAGE_ROUTE} />} />
    </Routes>
  );
};
export default AppRoutes;
