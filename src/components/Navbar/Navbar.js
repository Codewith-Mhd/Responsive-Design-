import React from 'react';
import './Navbar.css';
import Logo from '../../components/UI/Logo/Logo';
import {Link} from "react-router-dom";

const Navbar = ({ clicked, close }) => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <div>
          <ul className={close ? '#navbar active' : '#navbar'} id="navbar">
            <li>
              <a href="home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mobile" onClick={clicked}>
          <i id="bar" className={close ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
