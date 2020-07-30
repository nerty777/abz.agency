import React from 'react';
import AsyncSelect from 'react-select/async';
import Modal from 'react-modal';

import AfterAddUserModal from './components/AfterAddUserModal';
import DropdownIndicator from './components/DropdownIndicator';

import Sprite from '../../assets/icons/sprite.svg';

const SignUp = ({
  name,
  email,
  phone,
  photoFileName,
  positionValue,
  error,
  isValidForm,
  messageAfterAddUser,
  showModal,
  handleSubmit,
  handleChange,
  handleUsersPositions,
  handleSelectInputChange,
  handleUserPhotoChange,
  handleCloseModal,
}) => (
  <section id="sign-up" className="sign-up container">
    <h2 className="sign-up__title">Register to get a work</h2>
    <p className="sign-up__subtitle">
      Attention! After successful registration and alert, update the list of
      users in the block from the top
    </p>
    <form
      className="form"
      action="#"
      onSubmit={handleSubmit}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once
    >
      <label className="form__label--name" htmlFor="form__name">
        <input
          id="form__name"
          className={error.name ? 'form__name--red' : 'form__name'}
          type="text"
          placeholder="Your name"
          aria-label="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        {error.name && (
          <span className="form__error">
            User name, should be 2-60 characters
          </span>
        )}
        <span className={error.name ? 'name-title--red' : 'email-title'}>
          name
        </span>
      </label>
      <label className="form__label--email" htmlFor="form__email">
        <input
          id="form__email"
          className={error.email ? 'form__email--red' : 'form__email'}
          type="email"
          placeholder="Your email"
          aria-label="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {error.email && (
          <span className="form__error">
            The email must be a valid email address
          </span>
        )}
        <span className={error.email ? 'email-title--red' : 'email-title'}>
          email
        </span>
      </label>
      <label className="form__label--phone" htmlFor="form__phone">
        <input
          id="form__phone"
          className={error.phone ? 'form__phone--red' : 'form__phone'}
          type="phone"
          placeholder="+38 (___) ___ __ __"
          aria-label="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
        <span className={error.phone ? 'phone-title--red' : 'phone-title'}>
          phone
        </span>
        <p className="error__phone">
          {error.phone &&
            'User phone number, should start with code of Ukraine +380'}
        </p>
      </label>

      <div
        className={error.position ? 'select-wrapper--red' : 'select-wrapper'}
      >
        <AsyncSelect
          aria-label="upload"
          loadOptions={handleUsersPositions}
          cacheOptions
          defaultOptions
          components={{ DropdownIndicator }}
          classNamePrefix="select"
          placeholder="Select your position"
          onChange={handleSelectInputChange}
          value={positionValue}
        />
        {error.position && (
          <span className="error__select">Select your position</span>
        )}
      </div>
      <label
        className={error.file ? 'file__wrapper--red' : 'file__wrapper'}
        htmlFor="form__file"
      >
        <input
          id="form__file"
          className="form__file"
          type="file"
          accept="image/jpeg,image/jpg"
          name="photo"
          onChange={handleUserPhotoChange}
        />
        <div className="img__wrapper">
          <svg className="file__img">
            <use xlinkHref={`${Sprite}#icon-upload`} />
          </svg>
          <span className="file__img2">Upload</span>
        </div>
        <p className="file__placeholder">{photoFileName}</p>
        <p className={error.file ? 'file__error' : 'file__text'}>
          File format jpg up to 5 MB, the minimum size of 70x70px
        </p>
      </label>
      <div className="wrapper-button">
        <button
          className={
            isValidForm ? 'form__button--valid button' : 'form__button button'
          }
          type="submit"
        >
          Sign Up
        </button>
        <p className="error-add-user">
          {messageAfterAddUser === 'New user successfully registered'
            ? null
            : messageAfterAddUser}
        </p>
      </div>
    </form>
    <Modal
      isOpen={showModal}
      contentLabel="onRequestClose"
      onRequestClose={handleCloseModal}
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <AfterAddUserModal handleCloseModal={handleCloseModal} />
    </Modal>
  </section>
);

export default SignUp;
