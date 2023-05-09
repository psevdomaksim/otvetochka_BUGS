import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import FooterContainer from "./components/Footer/FooterContainer";
import HeaderContainer from "./components/Header/HeaderComponent";

const App = () => {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      <FooterContainer />
    </div>
  );
};

export default App;
