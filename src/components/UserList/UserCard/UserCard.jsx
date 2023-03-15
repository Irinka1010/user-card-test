import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import css from './UserCard.module.css';
import logo from '../../../images/logo.png';

import { useToggle } from '../../../hooks/useToggle';

export const UserCard = ({ user }) => {
  const { id, followers, avatar, tweets } = user;
  const LS_KEY_FOLLOWER = `followersCount${id}`;
  const LS_KEY_BTN = `clickButton${id}`;

  const [count, setCount] = useState(() => {
    return JSON.parse(window.localStorage.getItem(LS_KEY_FOLLOWER)) ?? followers;
  });
  const [isClick, ToggleClick] = useToggle(() => {
    return JSON.parse(window.localStorage.getItem(LS_KEY_BTN)) ?? false;
  });

  useEffect(() => {
    window.localStorage.setItem(LS_KEY_FOLLOWER, JSON.stringify(count));
    window.localStorage.setItem(LS_KEY_BTN, JSON.stringify(isClick));
  }, [count, isClick, LS_KEY_FOLLOWER, LS_KEY_BTN]);

  const onLeaveFeedback = () => {
    if (!isClick) {
      setCount(prev => prev + 1);
      ToggleClick();
    } else setCount(prev => prev - 1);
    ToggleClick();
  };

  const flwWithPoint = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <li className={css.box}>
      <div className={css.wrapper}>
        <img className={css.logo} src={logo} alt="logo" />
        <div className={css.ellipse}>
          <div className={css.avatarBox}>
            <img className={css.avatar} src={avatar} alt="avatar" />
          </div>
        </div>
      </div>

      <div className={css.context}>
        <p className={css.text}> {tweets} tweets</p>
        <p className={css.text}> {flwWithPoint} Followers</p>
      </div>
      <div className={css.wrapperBtn}>
        <button
          type="button"
          className={!isClick ? css.button : css.active}
          onClick={() => onLeaveFeedback({ count })}
        >
          {!isClick ? 'Follow' : 'Following'}
        </button>
      </div>
    </li>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
  }).isRequired,
};
