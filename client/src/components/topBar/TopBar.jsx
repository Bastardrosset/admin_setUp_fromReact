import React from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const NavBar = () => {
 

  return (
  <div className="top-bar-container">
    <div className="top-bar-left">
      <img src='/img/logo.png' alt='Logo de groupomania'/>
      <h1 className='title-logo'>Groupomania</h1>
    </div>
    <div className="top-bar-right">
      <div className="top-bar-links">
        <div className="top-bar-profil">
          <img src='/img/personn/ben.png' alt='Avatar' />
        </div>
        <div className="top-bar-icon-item">
          <PowerSettingsNewIcon className='icon'/>
        </div>
      </div>
    </div>
  </div>

  )
}

export default NavBar
