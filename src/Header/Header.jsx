import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as Logo } from '../assets/linkedin.svg';
import './Header.css'
import like from '../assets/linkedin.svg';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SuperVisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      {/* <h1>Header</h1> */}
 
      <div className="header_left">
        <img src={like}   alt="" />
          <div className="header_search">
            <SearchIcon />
            <input type="text" />


          </div>
      </div>
      <div className="header_right">

        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption Icon={SuperVisorAccountIcon} title="MyNetwork"></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
        <HeaderOption avatar="abtin.chegini@gmail.com" title="AbtinChegini"></HeaderOption>
      </div>
    

      </div>
  )
}

export default Header