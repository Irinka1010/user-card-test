import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import css from './UserCard.module.css';
import logo from '../../../images/logo.png';
import picture from '../../../images/picture.png';
import ellipse from '../../../images/ellipse.png';

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
        <div className={css.wrapperImg}>
          <div className={css.logoBox}>
            <img className={css.img} src={logo} alt="logo" width="76" />
          </div>
          <div className={css.pictureBox}>
            <img src={picture} alt="pictures" width="308" />
          </div>
        </div>
      </div>
      <div className={css.line}>
        <div className={css.ellipse}>
          <img src={ellipse} alt="ellipse" width="80" />
        </div>
        <div className={css.avatarBox}>
          <img src={avatar} alt="avatar" width="62" />
        </div>
      </div>

      <div className={css.context}>
        <p className={css.text}> {tweets} tweets</p>
        <p className={css.text}> {flwWithPoint} Followers</p>
      </div>

      <button
        type="button"
        className={!isClick ? css.button : css.active}
        onClick={() => onLeaveFeedback({ count })}
      >
        {!isClick ? 'Follow' : 'Following'}
      </button>
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
