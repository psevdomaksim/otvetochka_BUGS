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
import {
  clearQuestionMessagesAC,
  clearQuestionsAC,
} from "../Redux/ActionCreators/questionAC";
import { useEffect } from "react";
import {
  clearAnswerMessagesAC,
  clearAnswersAC,
} from "../Redux/ActionCreators/answerAC";
import { clearUsersAC } from "../Redux/ActionCreators/userAC";

const AppRoutes = () => {
  const store = useContext(StoreContext);

  const [isAuth, setIsAuth] = useState();
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  store.subscribe(() => {
    setIsAuth(store.getState().authPage.isAuth);
    setLoading(store.getState().authPage.isLoading);
  });

  useEffect(() => {
    store.dispatch(clearQuestionsAC());
    store.dispatch(clearQuestionMessagesAC());
    store.dispatch(clearAnswersAC());
    store.dispatch(clearAnswerMessagesAC());
    store.dispatch(clearUsersAC());
  }, [location.pathname]);


  if (loading) {
    return <Spinner animation="grow" />;
  }

  if (
    (location.pathname === LOGIN_ROUTE && isAuth) ||
    (location.pathname === REGISTRATION_ROUTE && isAuth)
  ) {
    return <Navigate to={HOME_PAGE_ROUTE} />;
  }

  return (


    <Routes>
 
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}

      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};
export default AppRoutes;
