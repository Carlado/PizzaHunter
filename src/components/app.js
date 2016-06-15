import React, { Component } from 'react';
import NavBarSplash from './navbar_splash';

export default class App extends Component {
  render() {
    return (
      <div>        
        {this.props.children}
      </div>
    );
  }
}
