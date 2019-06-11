import React from 'react';

const AddUserModal = ({ handleCloseModal }) => (
  <div className="modal container">
    <p className="modal__title">Congratulations</p>
    <p className="modal__subtitle">
      You have successfully passed the registration
    </p>
    <button className="modal__btn" type="button" onClick={handleCloseModal}>
      Oк
    </button>
  </div>
);

export default AddUserModal;
