// Navbar.jsx
import React from 'react';
import './NavBarStyles.css';

export default function Navbar({ onComponentChange }) {
  return (
    <ul className="topnav">
      <li>
        <a href="javascript:void(0)" onClick={() => onComponentChange('home')}>
          Home
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" onClick={() => onComponentChange('menu')}>
          Menu
        </a>
      </li>
      <li>
        <a href="javascript:void(0)" onClick={() => onComponentChange('booktable')}>
          BookTable
        </a>
      </li>
      <li>
        <a className='right' href="javascript:void(0)" onClick={() => onComponentChange('aboutus')}>
          AboutUs
        </a>
      </li>
    </ul>
  );
}
