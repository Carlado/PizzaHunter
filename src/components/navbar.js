import React from 'react';
import SearchBar from './searchbar';
import {Link} from 'react-router';

const NavBar = () => {
  return (
  <div>
    <div className="flex-wrapper">
      <div className="topbar">
        <div className="container navbar-container">
          <div className="row topbar-row">
            <div className="col-sm-6">
                <Link to="/"><h4>Pizza Hunter</h4></Link>
            </div>
            <div className="col-sm-6">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="container-fluid topbar-below">
        <p>Powered by Foursquare</p>
      </div>
  </div>

  );
}

export default NavBar;
