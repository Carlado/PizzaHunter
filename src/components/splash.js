import React, { Component } from 'react';
import SearchBar from './searchbar';
import NavBarSplash from './navbar_splash';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <NavBarSplash />
        <div className="main-splash">
        <div className="container hero-area">
          <h1>Hungry? Then let's take care of it.</h1>
          <h2>Where are you?</h2>
          <SearchBar />
        </div>


        </div>
      </div>
    )
  }
}
