import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderComponent';
import HomePageContainer from './components/HomePage/HomePageContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <div>
        <HeaderContainer />
        <HomePageContainer />
      </div>
    </div>
  );
}

export default App;
