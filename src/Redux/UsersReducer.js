import { combineReducers } from 'redux';

import types from './UsersActionTypes';

function usersSuccessReducer(state = {}, { type, payload }) {
  switch (type) {
    case types.FETCH_USERS_SUCCESS:
      return {
        users: payload.usersList.users,
        next_url: payload.usersList.links.next_url,
      };
    case types.FETCH_NEXT_USERS_SUCCESS:
      return {
        users: [...state.users, ...payload.usersList.users],
        next_url: [payload.usersList.links.next_url],
      };
    default:
      return state;
  }
}

function usersLoadingReducer(state = false, { type }) {
  switch (type) {
    case types.FETCH_USERS_LOADING:
      return true;
    case types.FETCH_USERS_SUCCESS:
    case types.FETCH_NEXT_USERS_SUCCESS:
    case types.FETCH_USERS_ERROR:
      return false;
    default:
      return state;
  }
}

function usersErrorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_USERS_LOADING:
      return null;
    case types.FETCH_USERS_ERROR:
      return `usersErrorReducer error: ${payload.error}`;
    default:
      return state;
  }
}

export default combineReducers({
  data: usersSuccessReducer,
  loading: usersLoadingReducer,
  error: usersErrorReducer,
});
