import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import FooterContainer from './components/Footer/FooterContainer';
import HeaderContainer from './components/Header/HeaderComponent';
import HomePageContainer from './components/HomePage/HomePageContainer';
import QuestionPage from './components/QuestionPage/QuestionPage';
import Profile from './components/Profile/Profile';
import Edit from './components/Edit/Edit';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import NewQuestion from './components/NewQuestion/NewQuestion';

const App = (props) => {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <div>
        <Routes>
          <Route path="/homepage" element={<HomePageContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/questionpage" element={<QuestionPage />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newq" element={<NewQuestion />} />
        </Routes>
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
