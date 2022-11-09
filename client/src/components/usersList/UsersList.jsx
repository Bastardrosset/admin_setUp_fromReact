import React from 'react'

export default function UsersList({user}) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    
  return (
    <li className='left-bar-users'>
        <img 
            className='left-bar-user-img' 
            src={publicFolder + user.profilPicture}
            alt=''/>
        <span className='left-bar-user-name'>{user.username}</span>
    </li>
  )
}
