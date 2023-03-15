import React from 'react';
import PropTypes from 'prop-types';
import css from './UserList.module.css';
import { UserCard } from './UserCard/UserCard';

export const UserList = ({ users, toggleFollow }) => {
  return (
    <ul className={css.list}>
      {users.map(users => (
        <li key={users.id} className={css.box}>
          <UserCard users={users} toggleFollow={toggleFollow} />
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  toggleFollow: PropTypes.func,
};
