// Navbar.jsx
import React from 'react';
import './NavBarStyles.css';

export default function Navbar({ onComponentChange }) {
  return (
    <ul className="topnav">
      <li>
        <img src ="./logo.svg" />
      </li>
      <li>
        <a href="#home" onClick={() => onComponentChange && onComponentChange('home')}>
          Home
        </a>
      </li>
      <li>
        <a href="#menu" onClick={() => onComponentChange && onComponentChange('menu')}>
          Menu
        </a>
      </li>
      <li>
        <a href="#booktable" onClick={() => onComponentChange && onComponentChange('booktable')}>
          BookTable
        </a>
      </li>
      <li>
        <a href="#aboutus" onClick={() => onComponentChange && onComponentChange('aboutus')}>
          AboutUs
        </a>
      </li>
    </ul>
  );
}
