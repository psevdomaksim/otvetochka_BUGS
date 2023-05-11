import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import FooterContainer from "./components/Footer/FooterContainer";
import HeaderContainer from "./components/Header/HeaderComponent";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

const App = () => {
  return (
    <div className="app_wrapper">
    <BrowserRouter>
     <HeaderContainer />
      <div className="content_wrapper">      
        <AppRoutes />   
      </div>
      <FooterContainer />
    </BrowserRouter>
    </div>
  );
};

export default App;
