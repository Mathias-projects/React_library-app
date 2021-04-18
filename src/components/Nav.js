import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container">
        <Link className="navbar-brand" to="/">Library</Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/about">About us</Link>
          <Link className="nav-item nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;