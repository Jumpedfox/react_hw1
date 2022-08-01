import { SocialProfile } from "./socialProfile/socialProfile";
import user from '../data/user.json';

import { Statistics } from "./statistics/statistics";
import data from '../data/data.json'

import { FriendList } from "./friendList/friendList";
import friends from '../data/friends.json'

import { Transactions } from "./transactions/transactions";
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <SocialProfile
    user={user}
    />
  );
};

export const App2 = () => {
  return (
    <Statistics
    data={data}
    />
    );
  };

export const App3 = () => {
  return (
    <FriendList
    friends={friends}
    />
    );
  };

export const App4 = () => {
  return (
    <Transactions
    transactions={transactions}
    />
    );
  };