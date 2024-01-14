import React from 'react';
import './FriendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={`itemFriend ${isOnline ? 'online' : 'offline'}`}>
      <span className="statusFriend"></span>
      <img className="avatarFriend" src={avatar} alt="User avatar" width="48" />
      <p className="nameFriend">{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
