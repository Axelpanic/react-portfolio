import React from 'react';
import Style from '../assets/style/navtab.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Deployed"

          onClick={() => handlePageChange('Deployed')}
          className={currentPage === 'Deployed' ? 'nav-link active' : 'nav-link'}
        >
          Deployed
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Skills"

          onClick={() => handlePageChange('Skills')}
          className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
