import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {AuthContext} from '../../context/AuthContext';


const NavBar = () => {
  const { user } = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
  <div className="top-bar-container">
    <div className="top-bar-left">
      <Link to='/'>
        <img src={publicFolder + 'logo.png'} alt='Logo de groupomania'/>
      </Link>
      <Link to='/'>
        <h1 className='title-logo'>Groupomania</h1>
      </Link>
    </div>
    <div className="top-bar-right">
      <div className="top-bar-links">
        <div className="top-bar-profil">
          <Link to={`/profil/${user.username}`}>
            <img src={
                user.profilPicture
                ? publicFolder + user.profilPicture
                : publicFolder + 'noAvatar.png'
                } 
                alt='Avatar' />
          </Link>
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
