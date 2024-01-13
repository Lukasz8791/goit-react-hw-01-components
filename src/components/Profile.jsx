import React from 'react';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profileAll">
      <div className="descriptionProfile">
        <img src={avatar} alt="User avatar" className="avatarProfile" />
        <p className="nameProfile">{username}</p>
        <p className="tagProfile">{tag}</p>
        <p className="locationProfile">{location}</p>

        <ul className="statsProfile">
          <li className="listElementProfile">
            <span className="labelProfile">Followers</span>
            <span className="quantityProfile">{stats.followers}</span>
          </li>
          <li className="listElementProfile">
            <span className="labelProfile">Views</span>
            <span className="quantityProfile">{stats.views}</span>
          </li>
          <li className="listElementProfile">
            <span className="labelProfile">Likes</span>
            <span className="quantityProfile">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
