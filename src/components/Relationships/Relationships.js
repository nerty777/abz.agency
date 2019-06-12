import React from 'react';

import Sprite from '../../assets/icons/sprite.svg';

const Relationships = () => (
  <section
    id="relationships"
    className="relationships container"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <h2 className="relationships__title">
      About my relationships with web-development
    </h2>
    <ul className="relationships__list">
      <li className="relationships__item">
        <svg className="relationships__img">
          <use xlinkHref={`${Sprite}#icon-html`} />
        </svg>
        <div className="relationships__wrapper-text">
          <h3 className="relationships__subtitle">
            I&apos;m in love with HTML
          </h3>
          <p className="relationships__text">
            Hypertext Markup Language (HTML) is the standard markup language for
            creating web pages and web applications.
          </p>
        </div>
      </li>
      <li className="relationships__item">
        <svg className="relationships__img">
          <use xlinkHref={`${Sprite}#icon-css`} />
        </svg>
        <div className="relationships__wrapper-text">
          <h3 className="relationships__subtitle">CSS is my best friend</h3>
          <p className="relationships__text">
            Cascading Style Sheets (CSS) is a style sheet language used for
            describing the presentation of a document written in a markup
            language like HTML.
          </p>
        </div>
      </li>
      <li className="relationships__item">
        <svg className="relationships__img">
          <use xlinkHref={`${Sprite}#icon-javascript`} />
        </svg>
        <div className="relationships__wrapper-text">
          <h3 className="relationships__subtitle">JavaScript is my passion</h3>
          <p className="relationships__text">
            JavaScript is a high-level, interpreted programming language. It is
            a language which is also characterized as dynamic, weakly typed,
            prototype-based and multi-paradigm.
          </p>
        </div>
      </li>
    </ul>
  </section>
);

export default Relationships;
