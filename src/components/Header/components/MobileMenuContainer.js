import React, { Component, createRef } from 'react';

import MobileMenu from './MobileMenu';

export default class MobileMenuContainer extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleEscClick);
  }

  handleWindowClick = e => {
    const { onCloseMenu, isMenuOpen } = this.props;
    if (e.target.className === 'mobile-nav__link') {
      onCloseMenu();
    }
    if (isMenuOpen && this.backdropRef.current !== e.target) {
      return;
    }
    onCloseMenu();
  };

  handleEscClick = e => {
    const { onCloseMenu } = this.props;
    if (e.code !== 'Escape') {
      return;
    }
    onCloseMenu();
  };

  render() {
    const { userPhoto, userName, userEmail } = this.props;
    return (
      <div
        className="backdrop container"
        ref={this.backdropRef}
        data-aos="fade-right"
        data-aos-duration="600"
      >
        <MobileMenu
          userPhoto={userPhoto}
          userName={userName}
          userEmail={userEmail}
        />
      </div>
    );
  }
}
