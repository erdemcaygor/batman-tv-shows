import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header = (props) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <img className="logo pr-2 mr-md-auto" src="/assets/images/batman.png" />
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/">Home</Link>
        <Link className="p-2 text-dark" to="/about">About</Link>
     </nav>
     </div>
  );
}
