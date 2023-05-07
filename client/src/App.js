import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterContainer from './components/Footer/FooterContainer';
import ProfileContainer from './components/Footer/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderComponent';
import HomePageContainer from './components/HomePage/HomePageContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div>
        <Routes>
          <Route path="homepage" element={<HomePageContainer />} />
          <Route path="profile" element={<ProfileContainer />} />
        </Routes>
      </div>
      <FooterContainer />
    </div>
  );
}

export default App;
