import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';


export default function LeftNav() {
  return (
    <div className='left-bar'>
      <div className="left-bar-wrapper">
        <ul>
          <li>
            <HomeIcon className='icons'/>
            <span>Home</span>
          </li>
          <li>
            <PersonIcon className='icons'/>
            <span>Profil</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
