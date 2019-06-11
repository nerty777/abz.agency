const getUsers = state => state.data && state.data.users;
const getNextUrl = state => state.data && state.data.next_url;
const getLoading = state => state.loading;
const getError = state => state.error;

export default { getUsers, getNextUrl, getLoading, getError };
