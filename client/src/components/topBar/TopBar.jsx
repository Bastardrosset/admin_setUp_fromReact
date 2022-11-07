import React from 'react';
import {Link} from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const NavBar = () => {
 

  return (
  <div className="top-bar-container">
    <div className="top-bar-left">
      <Link to='/'>
        <img src='/images/logo.png' alt='Logo de groupomania'/>
      </Link>
      <Link to='/'>
        <h1 className='title-logo'>Groupomania</h1>
      </Link>
    </div>
    <div className="top-bar-right">
      <div className="top-bar-links">
        <div className="top-bar-profil">
          <img src='/images/personn/ben.png' alt='Avatar' />
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
