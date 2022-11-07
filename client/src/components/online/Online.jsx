import React from 'react'

export default function Online({user}) {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className='right-bar-friend'>
        <div className="right-bar-profil-img-container">
            <img 
              className='right-bar-profil-img' 
              src={publicFolder + user.profilPicture} 
              alt='Avatar utilisateur ami'/>
            <span className='right-bar-online'></span>
        </div>
        <span className='right-bar-username'>{user.username}</span>
    </li>
  )
}
