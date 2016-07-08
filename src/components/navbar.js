import React from 'react';
import SearchBar from './searchbar';
import {Link} from 'react-router';

const NavBar = () => {
  return (
    <div>
      <div className="container-fluid topbar">
        <Link to="/"><h4>Pizza Hunter</h4></Link><h4></h4>
        <SearchBar />
      </div>
    </div>
  );
}

export default NavBar;
