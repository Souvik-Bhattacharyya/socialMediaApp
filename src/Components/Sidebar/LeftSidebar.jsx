import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Components.css';

const LeftSidebar = () => {
  return (
    <div className='leftSidebar'>
      <div className="topList">
        <NavLink to="/" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="./Assets/home.svg" alt="Home" />
          Home
        </NavLink>
        <NavLink to="/notification" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="./Assets/noti.svg" alt="Home" />
          Notification
        </NavLink>
        <NavLink to="/shop" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="./Assets/heart.svg" alt="Home" />
          Shop
        </NavLink>
        <NavLink to="/conversation" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="./Assets/message.svg" alt="Home" />
          Conversation
        </NavLink>
        <NavLink to="/wallet" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="/Assets/wallet.svg" alt="Home" />
          Wallet
        </NavLink>
        <NavLink to="/subscription" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="./Assets/favorite.svg" alt="Home" />
          Subscription
        </NavLink>
        <NavLink to="/profile" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="./Assets/profile.svg" alt="Home" />
          My Profile
        </NavLink>
        <NavLink to="/settings" className={`sidebarList ${(e) => e.isActive ? "active" : ""}`}>
          <img className='leftIcon' src="./Assets/setting.svg" alt="Home" />
          Settings
        </NavLink>
      </div>
      <div className='sidebarList endBtn'>
        <img className='leftIcon' src="./Assets/logout.svg" alt="Home" />
        Log out
      </div>
    </div>
  )
}

export default LeftSidebar;