import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profileAll}>
      <div className={styles.descriptionProfile}>
        <img src={avatar} alt="User avatar" className={styles.avatarProfile} />
        <p className={styles.nameProfile}>{username}</p>
        <p className={styles.tagProfile}>{tag}</p>
        <p className={styles.locationProfile}>{location}</p>

        <ul className={styles.statsProfile}>
          <li className={styles.listElementProfile}>
            <span className={styles.labelProfile}>Followers</span>
            <span className={styles.quantityProfile}>{stats.followers}</span>
          </li>
          <li className={styles.listElementProfile}>
            <span className={styles.labelProfile}>Views</span>
            <span className={styles.quantityProfile}>{stats.views}</span>
          </li>
          <li className={styles.listElementProfile}>
            <span className={styles.labelProfile}>Likes</span>
            <span className={styles.quantityProfile}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
