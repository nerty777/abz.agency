import React from 'react';

const MobileMenu = ({ userPhoto, userName, userEmail }) => (
  <div className="mobile-menu">
    <img
      className="mobile-menu__img"
      src={userPhoto}
      alt="user"
      width="67"
      height="67"
    />
    <p className="mobile-menu__name">{userName}</p>
    <p className="mobile-menu__email">{userEmail}</p>
    <nav className="mobile-menu__nav">
      <ul className="mobile-nav">
        <li className="mobile-nav__item">
          <a className="mobile-nav__link" href="#about-me">
            About me
          </a>
        </li>
        <li className="mobile-nav__item">
          <a className="mobile-nav__link" href="#relationships">
            Relationships
          </a>
        </li>
        <li className="mobile-nav__item">
          <a className="mobile-nav__link" href="#requirements">
            Requirements
          </a>
        </li>
        <li className="mobile-nav__item">
          <a className="mobile-nav__link" href="#users">
            Users
          </a>
        </li>
        <li className="mobile-nav__item">
          <a className="mobile-nav__link" href="#sign-up">
            Sign Up
          </a>
        </li>
        <li className="mobile-nav__item">
          <a className="mobile-nav__link" href="/abz.agency/#">
            Sign Out
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default MobileMenu;
