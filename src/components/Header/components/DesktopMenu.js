import React from 'react';

import Sprite from '../../../assets/icons/sprite.svg';

const DesktopMenu = ({ userName, userEmail, userPhoto }) => (
  <div className="desktop-menu">
    <nav className="desktop-menu__nav">
      <ul className="desktop-menu__list">
        <li className="desktop-menu__item">
          <a href="#about-me" className="desktop-menu__link">
            About me
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#relationships" className="desktop-menu__link">
            Relationships
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#requirements" className="desktop-menu__link">
            Requirements
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#users" className="desktop-menu__link">
            Users
          </a>
        </li>
        <li className="desktop-menu__item">
          <a href="#sign-up" className="desktop-menu__link">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
    <div className="sign-in">
      <div className="wrapper-name-email">
        <p className="sign-in__name">{userName}</p>
        <p className="sign-in__email">{userEmail}</p>
      </div>
      <div className="wrapper-photo-icon">
        <img className="sign-in__photo" src={userPhoto} alt={userName} />
        <svg className="sign-in__icon">
          <use xlinkHref={`${Sprite}#icon-sign-out`} />
        </svg>
      </div>
    </div>
  </div>
);

export default DesktopMenu;
