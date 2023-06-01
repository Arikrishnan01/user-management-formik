import React from 'react';
import './topbar.css';
import NotificationsIcon  from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">user management</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsIcon/>
                <span className="topIconBadge">17</span>
            </div>
            <div className="topbarIconContainer">
                <LanguageIcon/>
                <span className="topIconBadge">6</span>
            </div>
            <div className="topbarIconContainer">
                <SettingsIcon/>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" className="topAvator" />
        </div>
      </div>
    </div>
  )
}