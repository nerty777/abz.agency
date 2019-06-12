import React from 'react';

import Logo from '../../assets/logo/logo.svg';
import Sprite from '../../assets/icons/sprite.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="wrapper-logo-nav">
        <a className="logo__link" href="/abz.agency/#">
          <img
            className="logo__img"
            src={Logo}
            alt="abz.agency"
            width="134"
            height="24"
            title="abz.agency"
          />
        </a>
        <nav className="nav" data-aos="fade-up" data-aos-duration="800">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#about-me">
                About me
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#relationships">
                Relationships
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#requirements">
                Requirements
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#users">
                Users
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#sign-up">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrapper-links-pages">
        <ul className="links" data-aos="fade-up" data-aos-duration="800">
          <li className="links__item">
            <a
              className="links__item--mail"
              href="mailto:work.of.future@gmail.com"
            >
              work.of.future@gmail.com
            </a>
          </li>
          <li className="links__item">
            <a className="links__item--tel" href="tel:+380507892498">
              +38 (050) 789 24 98
            </a>
          </li>
          <li className="links__item">
            <a
              className="links__item--tel links__item--tel2"
              href="tel:+380955560845"
            >
              +38 (095) 556 08 45
            </a>
          </li>
        </ul>
        <ul className="pages" data-aos="fade-right" data-aos-duration="800">
          <li className="pages__column">
            <ul className="pages__list">
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  News
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Blog
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Partners
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Shop
                </a>
              </li>
            </ul>
          </li>
          <li className="pages__column">
            <ul className="pages__list">
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Overview
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Design
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Code
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Collaborate
                </a>
              </li>
            </ul>
          </li>
          <li className="pages__column">
            <ul className="pages__list">
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Tutorials
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Resources
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Guides
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Examples
                </a>
              </li>
            </ul>
          </li>
          <li className="pages__column">
            <ul className="pages__list">
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  FAQ
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Terms
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Conditions
                </a>
              </li>
              <li className="pages__item">
                <a className="pages__link" href="/abz.agency/#">
                  Help
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="wrapper-social-copyright">
        <ul className="social">
          <li className="social__item">
            <a href="/abz.agency/#" title="facebook">
              <svg className="social__img">
                <use xlinkHref={`${Sprite}#icon-facebook`} />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="/abz.agency/#" title="linkedin">
              <svg className="social__img">
                <use xlinkHref={`${Sprite}#icon-linkedin`} />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="/abz.agency/#" title="instagram">
              <svg className="social__img">
                <use xlinkHref={`${Sprite}#icon-instagram`} />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="/abz.agency/#" title="twitter">
              <svg className="social__img">
                <use xlinkHref={`${Sprite}#icon-twitter`} />
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a href="/abz.agency/#" title="pinterest">
              <svg className="social__img">
                <use xlinkHref={`${Sprite}#icon-pinterest`} />
              </svg>
            </a>
          </li>
        </ul>
        <p className="footer__text">
          &copy; abz.agency specially for the test task
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
