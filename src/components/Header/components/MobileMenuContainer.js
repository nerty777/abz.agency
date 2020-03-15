import React, { Component, createRef } from 'react';

import MobileMenu from './MobileMenu';

export default class MobileMenuContainer extends Component {
  backdropRef = createRef();

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleEscClick);
  }

  handleWindowClick = ({ target }) => {
    const { onCloseMenu } = this.props;
    if (
      this.backdropRef.current === target ||
      target.className === 'mobile-nav__link'
    ) {
      onCloseMenu();
    }
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
