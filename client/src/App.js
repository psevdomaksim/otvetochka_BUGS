import React from 'react';
import './App.css';
import FooterContainer from './components/Footer/FooterContainer';
import HeaderContainer from './components/Header/HeaderComponent';
import HomePageContainer from './components/HomePage/HomePageContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <div>
        <HeaderContainer />
        <HomePageContainer />
      </div>
      <div>
        <FooterContainer />
      </div>
    </div>
  );
}

export default App;
