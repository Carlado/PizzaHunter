import React from 'react';
import SearchBar from './searchbar';

const NavBar = () => {
  return (
    <div>
      <div className="container-fluid topbar">
        <h4>Pizza Hunter</h4>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
