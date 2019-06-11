import React, { Component } from 'react';
import AOS from 'aos';

import Header from '../Header/HeaderContainer';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Relationships from '../Relationships/Relationships';
import Requirements from '../Requirements/Requirements';
import Users from '../Users/UsersContainer';
import SignUp from '../SignUp/SignUpContainer';
import Footer from '../Footer/Footer';

import 'aos/dist/aos.css';

export default class App extends Component {
  state = {};

  componentDidMount() {
    AOS.init({ offset: 80 });
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Banner />
          <AboutMe />
          <Relationships />
          <Requirements />
          <Users />
          <SignUp />
        </main>
        <Footer />
      </>
    );
  }
}
