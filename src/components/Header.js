import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: 'url(https://cdn.wallpapersafari.com/53/58/rFDRtB.jpg)' }}>
      <div className="header-content">
        <h1 className="header-title">PictureLens</h1>
        <nav>
          <ul className="header-menu">
            <li className="header-menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-menu-item">
              <Link to="/join">Join</Link>
            </li>
            <li className="header-menu-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="header-menu-item">
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
