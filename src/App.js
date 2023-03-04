import React from 'react';
import users from './users.json';

import { Wrapper } from './components';
import { UserList } from './components';

export default function App() {
  return (
    <main>
      <Wrapper>
        <UserList users={users} />
      </Wrapper>
    </main>
  );
}
