import React from 'react';

const Banner = () => (
  <section className="banner">
    <div className="banner__container">
      <h1 className="banner__title">
        Test assignment for Frontend Developer position
      </h1>
      <p className="banner__text">
        We kindly remind you that your test assignment should be submitted as a
        link to github/bitbucket repository.
      </p>
      <a className="banner__button button" href="#sign-up">
        Sign Up
      </a>
    </div>
  </section>
);

export default Banner;
