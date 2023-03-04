import React from 'react';
import users from './users.json';
// import css from './index.css';
import { Wrapper } from './components/Wrapper/Wrapper';
import { UserList } from './components';

// import { useLocalStorage } from '../../../hooks/useLocalStorage';
export default function App() {
  // const [activity, setActivity] = useLocalStorage([], 'activity');
  // const addToActivity = (follower, isClick) => {
  //   setActivity([follower, isClick]);
  //   console.log(activity);
  // };
  return (
    <main>
      <Wrapper>
        <UserList users={users} />
      </Wrapper>
    </main>
  );
}
