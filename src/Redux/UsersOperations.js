import axios from 'axios';
import {
  fetchUsersLoading,
  fetchUsersError,
  fetchUsersSuccess,
  fetchNextUsersSuccess,
} from './UsersActions';

const fetchUsers = url => async dispatch => {
  dispatch(fetchUsersLoading());
  try {
    const response = await axios.get(url);
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    console.log('error: ', error);
    dispatch(fetchUsersError(error.message));
  }
};

const fetchNextUsers = url => async dispatch => {
  dispatch(fetchUsersLoading());
  try {
    const response = await axios.get(url);
    dispatch(fetchNextUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersError(error.message));
  }
};

export default { fetchUsers, fetchNextUsers };
