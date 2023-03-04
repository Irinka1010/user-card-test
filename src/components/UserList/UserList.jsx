import React from 'react';
import PropTypes from 'prop-types';
import css from './UserList.module.css';
import { UserCard } from './UserCard/UserCard';

export const UserList = ({ users }) => {
  return (
    <ul className={css.list}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
};
