import React from 'react'

export default function UsersList({user}) {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className='side-bar-users'>
        <img 
            className='side-bar-users-img' 
            src={publicFolder+user.profilPicture}
            alt=''/>
        <span className='side-bar-users-username'>{user.username}</span>
    </li>
  )
}
