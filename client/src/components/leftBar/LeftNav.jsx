import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import UsersList from '../usersList/UsersList';
import {Users} from '../../dummyData.js';
import Online from '../online/Online';
import HomeRigthBar from '../rightBar/RightBar'

export default function LeftNav({user}) {

  // const [user, setUser] = useState(users.length);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users/users${user.users}`)
  //     setUser(res.data)
  //   };
  //   fetchUser();
  // }, [user]);

  const HomeLeftBar = () => {
    return (
      <>
      <ul className='left-bar-list-users'>
            {Users.map((u) => (
              <UsersList key={u.id}user={u}/>
            ))}
          </ul>
      </>
    )
  }
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
        <hr className='nav-hr'/>
        {user ? <HomeRigthBar/> : <HomeLeftBar/>}
      </div>
    </div>
  )
}
