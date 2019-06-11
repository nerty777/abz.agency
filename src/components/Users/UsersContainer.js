import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import usersOperations from '../../Redux/UsersOperations';
import usersSelectors from '../../Redux/UsersSelectors';

class UsersContainer extends Component {
  async componentDidMount() {
    try {
      const { fetchUsers } = this.props;
      await fetchUsers(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
      );
    } catch (error) {
      console.log('users section error : ', error);
    }
  }

  handleNextUsersList = async () => {
    const { fetchNextUsers, nextUrl } = this.props;
    await fetchNextUsers(nextUrl);
  };

  render() {
    const { usersList, nextUrl, error, loading } = this.props;
    return (
      <Users
        usersList={usersList}
        nextUrl={nextUrl}
        handleNextUsersList={this.handleNextUsersList}
        error={error}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => ({
  usersList: usersSelectors.getUsers(state),
  nextUrl: usersSelectors.getNextUrl(state),
  loading: usersSelectors.getLoading(state),
  error: usersSelectors.getError(state),
});

const mapDispatchToProps = {
  fetchUsers: usersOperations.fetchUsers,
  fetchNextUsers: usersOperations.fetchNextUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersContainer);
