import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistic';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import './Profile/Profile.module.css';
import './Statistics/Statistic.module.css';
import './Friends/FriendList.module.css';
import './Transaction/TransactionHistory.module.css';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
