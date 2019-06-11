import types from './UsersActionTypes';

export const fetchUsersLoading = () => ({
  type: types.FETCH_USERS_LOADING,
});

export const fetchUsersError = error => ({
  type: types.FETCH_USERS_ERROR,
  payload: {
    error,
  },
});

export const fetchUsersSuccess = usersList => ({
  type: types.FETCH_USERS_SUCCESS,
  payload: {
    usersList,
  },
});

export const fetchNextUsersSuccess = usersList => ({
  type: types.FETCH_NEXT_USERS_SUCCESS,
  payload: {
    usersList,
  },
});

export default {
  fetchUsersLoading,
  fetchUsersError,
  fetchUsersSuccess,
  fetchNextUsersSuccess,
};
