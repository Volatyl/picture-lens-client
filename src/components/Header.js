import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/02/98/50/60/1000_F_298506027_1iZ5OmBUqJQFhjW4ONVfNC7d8Ov7xvWp.jpg)' }}>
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
    </header>
  );
};

export default Header;
