import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import FooterContainer from "./components/Footer/FooterContainer";
import Header from "./components/Header/Header";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { StoreContext } from ".";
import { setLoginTC } from "./Redux/ActionCreators/authAC";

const App = () => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.dispatch(setLoginTC());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app_wrapper">
      <button
        type="button"
        className="btn btn-outline-success button_up"
        onClick={scrollToTop}
      >
        <i className="bi bi-chevron-up"></i>
      </button>

      <BrowserRouter>
        <Header />
        <div className="content_wrapper">
          <AppRoutes />
        </div>
        <FooterContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
