import React from 'react';
import PropTypes from 'prop-types';

import css from './UserCard.module.css';
import logo from '../../../images/logo.png';
import { normalizeNumber } from '../../../utilities';

export const UserCard = ({
  users: { user, id, tweets, followers, avatar, isFollow },
  toggleFollow,
}) => {
  const flwWithPoint = normalizeNumber(followers);
  return (
    <>
      <div className={css.wrapper}>
        <img className={css.logo} src={logo} alt="logo" />
        <div className={css.ellipse}>
          <div className={css.avatarBox}>
            <img className={css.avatar} src={avatar} alt={user} />
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
          className={!isFollow ? css.button : css.active}
          onClick={() => toggleFollow(id)}
        >
          {!isFollow ? 'Follow' : 'Following'}
        </button>
      </div>
    </>
  );
};

UserCard.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollow: PropTypes.bool,
  }).isRequired,
  toggleFollow: PropTypes.func,
};
