import React, { Component } from 'react';
import { connect } from 'react-redux';
import getDimensions from 'image-dimensions';

import SignUp from './SignUp';
import usersOperations from '../../Redux/UsersOperations';

import api from '../../services/api';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  positionId: null,
  positionValue: '',
  photoFileName: 'Upload your photo',
  error: {
    name: false,
    email: false,
    phone: false,
    position: false,
    file: false,
  },
  isValidForm: false,
};

class SignUpContainer extends Component {
  state = {
    ...INITIAL_STATE,
    messageAfterAddUser: '',
    showModal: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });

    switch (name) {
      case 'name':
        this.handleValidationName(value);
        break;
      case 'email':
        this.handleValidationEmail(value);
        break;
      case 'phone':
        this.handleValidationPhone(value);
        break;
      default:
        break;
    }
  };

  handleUsersPositions = () => api.getUsersPositions();

  handleSelectInputChange = input => {
    this.setState(prevState => ({
      positionId: input.value,
      positionValue: input.name,
      error: { ...prevState.error, position: false },
    }));
    this.handleValidationForm();
  };

  handleValidationName = name => {
    if (name.length > 60 || name.length < 2) {
      this.setState(
        prevState => ({
          error: { ...prevState.error, name: true },
        }),
        () => this.handleValidationForm(),
      );
    } else {
      this.setState(
        prevState => ({
          error: { ...prevState.error, name: false },
        }),
        () => this.handleValidationForm(),
      );
    }
  };

  handleValidationEmail = email => {
    const patternEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email.length > 100 || !patternEmail.test(email)) {
      this.setState(
        prevState => ({
          error: { ...prevState.error, email: true },
        }),
        () => this.handleValidationForm(),
      );
    } else {
      this.setState(
        prevState => ({
          error: { ...prevState.error, email: false },
        }),
        () => this.handleValidationForm(),
      );
    }
  };

  handleValidationPhone = phone => {
    const patternPhone = /^\+?3?8?(0\d{9})$/;
    if (!patternPhone.test(phone)) {
      this.setState(
        prevState => ({
          error: { ...prevState.error, phone: true },
        }),
        () => this.handleValidationForm(),
      );
    } else {
      this.setState(
        prevState => ({
          error: { ...prevState.error, phone: false },
        }),
        () => this.handleValidationForm(),
      );
    }
  };

  handleValidationPositionId = positionId => {
    if (!(positionId >= 1)) {
      this.setState(
        prevState => ({
          error: { ...prevState.error, position: true },
        }),
        () => this.handleValidationForm(),
      );
    }
  };

  handleValidationPhotoFileName = photoFileName => {
    if (photoFileName === 'Upload your photo') {
      this.setState(
        prevState => ({
          error: { ...prevState.error, file: true },
        }),
        () => this.handleValidationForm(),
      );
    }
  };

  handleValidationPhoto = async file => {
    const photo = await getDimensions(file);
    if (
      +file.size > 5242880 ||
      file.type !== 'image/jpeg' ||
      photo.width < 70 ||
      photo.height < 70
    ) {
      this.setState(
        prevState => ({
          error: { ...prevState.error, file: true },
        }),
        () => this.handleValidationForm(),
      );
    }
  };

  handleUserPhotoChange = e => {
    const file = e.target.files[0];
    this.setState(
      prevState => ({
        error: { ...prevState.error, file: false },
        photoFileName: (file && file.name) || 'Upload your photo',
      }),
      () => this.handleValidationForm(),
    );
    if (file) {
      this.handleValidationPhoto(file);
    }
  };

  handleValidationForm = () => {
    const { name, email, phone, positionId, photoFileName, error } = this.state;
    if (
      name &&
      email &&
      phone &&
      positionId &&
      photoFileName &&
      !error.name &&
      !error.email &&
      !error.phone &&
      !error.position &&
      !error.file
    ) {
      this.setState({
        isValidForm: true,
      });
    } else {
      this.setState({
        isValidForm: false,
      });
    }
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const {
      name,
      email,
      phone,
      positionId,
      photoFileName,
      isValidForm,
    } = this.state;

    const { fetchUsers } = this.props;

    this.handleValidationName(name);
    this.handleValidationEmail(email);
    this.handleValidationPhone(phone);
    this.handleValidationPositionId(positionId);
    this.handleValidationPhotoFileName(photoFileName);

    if (isValidForm) {
      const token = await api.getToken();
      const responseAddUser = await api.addUser(
        `${name}`,
        `${email}`,
        `${phone}`,
        `${positionId}`,
        `${token}`,
      );

      switch (responseAddUser) {
        case 'New user successfully registered':
          this.setState({
            messageAfterAddUser: 'New user successfully registered',
            showModal: true,
          });
          try {
            fetchUsers(
              'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
            );
          } catch (error) {
            console.log('SignUp section fetchUsers error : ', error);
          }
          this.reset();
          break;
        case 'Network Error':
          this.setState({
            messageAfterAddUser: 'Network Error',
          });
          break;
        case 'Request failed with status code 401':
          this.setState({
            messageAfterAddUser: 'The token expired',
          });
          break;
        case 'Request failed with status code 409':
          this.setState({
            messageAfterAddUser: 'User with this phone or email already exist',
          });
          break;
        case 'Request failed with status code 422':
          this.setState({
            messageAfterAddUser: 'Validation failed',
          });
          break;
        default:
          break;
      }
    }
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
    document.querySelector('.form__file').value = '';
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      name,
      email,
      phone,
      photoFileName,
      positionValue,
      error,
      isValidForm,
      messageAfterAddUser,
      showModal,
    } = this.state;

    return (
      <SignUp
        name={name}
        email={email}
        phone={phone}
        photoFileName={photoFileName}
        positionValue={positionValue}
        error={error}
        isValidForm={isValidForm}
        messageAfterAddUser={messageAfterAddUser}
        showModal={showModal}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleUsersPositions={this.handleUsersPositions}
        handleSelectInputChange={this.handleSelectInputChange}
        handleUserPhotoChange={this.handleUserPhotoChange}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}

const mapDispatchToProps = {
  fetchUsers: usersOperations.fetchUsers,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUpContainer);
