import React from 'react';

import Loading from './components/Loading';

const Users = ({ usersList, nextUrl, handleNextUsersList, loading, error }) => (
  <section id="users" className="users container">
    <h2 className="users__title">Our cheerful users</h2>
    <p className="users__subtitle">
      Attention! Sorting users by registration date
    </p>
    <ul className="users__list">
      {usersList &&
        usersList.map(user => (
          <li
            className="user"
            key={user.id}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img className="user__photo" src={user.photo} alt={user.name} />
            <div className="user-info-wrapper">
              <h3 className="user__name">{user.name}</h3>
              <p className="user__position">{user.position}</p>
              <p className="user__email">{user.email}</p>
              <p className="user__phone">{user.phone}</p>
            </div>
          </li>
        ))}
    </ul>
    {nextUrl && loading && <Loading />}
    {error && <div className="users__error">{error}</div>}
    {nextUrl && nextUrl[0] && (
      <button
        type="button"
        className="users__button button"
        onClick={handleNextUsersList}
      >
        Show more
      </button>
    )}
  </section>
);

export default Users;
