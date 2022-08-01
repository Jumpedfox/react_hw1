import React from "react";
import './friendList.scss'

export const FriendList = ({friends}) => {

    return (
      <section className="section-friend-list">
        <ul className="friend-list">
          {friends.map(friend => (
            <li className="item" key={friend.id}>
              <span className={`status ${friend.isOnline ? "online" : "offline"}`}></span>
              <img
                className="avatar"
                src={friend.avatar}
                alt={friend.name}
                width="48"
              />
              <p className="name">{friend.name}</p>
            </li>
          ))}
          
        </ul>
      </section>
    );};