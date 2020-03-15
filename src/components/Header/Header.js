import React from 'react';

import MobileMenu from './components/MobileMenuContainer';
import DesktopMenu from './components/DesktopMenu';

import Sprite from '../../assets/icons/sprite.svg';
import Logo from '../../assets/logo/logo.svg';

const Header = ({
  isMenuOpen,
  onToggleMenu,
  userName,
  userEmail,
  userPhoto,
}) => (
  <>
    <header className="header">
      <div className="header__container">
        <a className="header__link" href="/abz.agency/#">
          <img
            className="header__logo"
            src={Logo}
            alt="abz.agency"
            width="134"
            height="24"
          />
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={onToggleMenu}
          aria-label="mobile navigation"
        >
          <svg className="menu-button__img">
            <use xlinkHref={`${Sprite}#icon-line-menu`} />
          </svg>
        </button>
        <DesktopMenu
          userName={userName}
          userEmail={userEmail}
          userPhoto={userPhoto}
        />
        {isMenuOpen && (
          <MobileMenu
            onCloseMenu={onToggleMenu}
            userName={userName}
            userEmail={userEmail}
            userPhoto={userPhoto}
          />
        )}
      </div>
    </header>
  </>
);

export default Header;
