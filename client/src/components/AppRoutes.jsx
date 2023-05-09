import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "../utils/routes_consts";
import { authRoutes, publicRoutes } from "../routes";

const AppRoutes = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
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
