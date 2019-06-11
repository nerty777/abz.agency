import React, { Component } from 'react';

import Header from './Header';

import api from '../../services/api';

export default class HeaderContainer extends Component {
  state = {
    isMenuOpen: false,
    userName: '',
    userEmail: '',
    userPhoto: '',
  };

  async componentDidMount() {
    try {
      const userInfo = await api.getUserList(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users/1',
      );
      this.setState({
        userName: userInfo.user.name,
        userEmail: userInfo.user.email,
        userPhoto: userInfo.user.photo,
      });
    } catch (error) {
      console.log('header error : ', error);
    }
  }

  onToggleMenu = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { isMenuOpen, userName, userEmail, userPhoto } = this.state;
    return (
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={this.onToggleMenu}
        userName={userName}
        userEmail={userEmail}
        userPhoto={userPhoto}
      />
    );
  }
}
