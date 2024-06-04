import React, { useRef } from 'react';
import './App.css';
import PostsPage from './Components/CenterContents/PostsPage';
import Notification from './Components/CenterContents/Notification';
import Conv from './Components/CenterContents/Conv';
import Shop from './Components/CenterContents/Shop';
import Wallet from './Components/CenterContents/Wallet';
import Profile from './Components/CenterContents/Profile';
import Settings from './Components/CenterContents/Settings';
import Subs from './Components/CenterContents/Subs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LeftSidebar from './Components/Sidebar/LeftSidebar';
import RightSidebar from './Components/Sidebar/RightSidebar';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <PostsPage />
                  <RightSidebar />
                </div>
              </>
            }
          />
          <Route path="/notification"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <Notification />
                  <RightSidebar />
                </div>
              </>
            }
          />
          <Route path="/shop"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <Shop />
                  <RightSidebar />
                </div>
              </>
            }
          />
          <Route path="/conversation"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <Conv />
                  <RightSidebar />
                </div>
              </>
            }
          />
          <Route path="/wallet"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <Wallet />
                  <RightSidebar />
                </div>
              </>
            }
          />
          <Route path="/subscription"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <Subs />
                  <RightSidebar />
                </div>
              </>
            }
          />
          <Route path="/profile"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <Profile />
                  <RightSidebar />
                </div>
              </>
            }
          />
          <Route path="/settings"
            element={
              <>
                <Navbar />
                <div className='container'>
                  <LeftSidebar />
                  <Settings />
                  <RightSidebar />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
