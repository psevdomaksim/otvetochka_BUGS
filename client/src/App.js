import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterContainer from './components/Footer/FooterContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderComponent';
import HomePageContainer from './components/HomePage/HomePageContainer';
import QuestionPage from './components/QuestionPage/QuestionPage';

const App = (props) => {
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <div>
        <Routes>
          <Route path="/homepage" element={<HomePageContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/questionpage" element={<QuestionPage />} />
        </Routes>
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
