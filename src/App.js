import React from 'react';
import usersJson from './users.json';
import { useLocalStorage } from './hooks';
import { Wrapper } from './components';
import { UserList } from './components';

export default function App() {
  const [users, setUsers] = useLocalStorage('users', usersJson);
  const toggleFollow = id => {
    setUsers(users =>
      users.map(user => {
        if (user.id === id) {
          return {
            ...user,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
            isFollow: user.isFollow ? false : true,
          };
        }
        return user;
      }),
    );
  };
  return (
    <main>
      <Wrapper>
        <UserList users={users} toggleFollow={toggleFollow} />
      </Wrapper>
    </main>
  );
}
