import React, { Component } from 'react';
import SearchBar from './searchbar';
import NavBarSplash from './navbar_splash';


const Splash = () => {
  return (
    <div className="main-splash">
      <NavBarSplash />
        <div className="container hero-area">
          <h1>Hungry? Then let's take care of it.</h1>
          <h2>Where are you?</h2>
          <SearchBar />
        </div>
    </div>
  );
}


export default Splash;
