import React, { useEffect, useState } from 'react'
import TopBar from '../../components/topBar/TopBar';
import LeftNav from '../../components/leftBar/LeftNav';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profil() {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const [user, setUser] = useState({});
  const username = useParams().username;
  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <TopBar />
      <div className="profil">
        <LeftNav />
        <div className="profil-right">
            <div className="profil-right-top">
                <div className="profil-cover">
                    <img 
                        className='profil-cover-img'
                        src={
                          user.coverPicture
                          ? publicFolder + user.coverPicture
                          : publicFolder + `noBanner.jpg`} 
                        alt=''/>
                    <img 
                        className='profil-user-img'
                        src={
                          user.picture
                          ? publicFolder + user.picture
                          : publicFolder + `noAvatar.png`} 
                        alt=''/>
                </div>
                <div className="profil-info">
                    <h4 className='profil-info-name'>{user.username}</h4>
                    <span className='profil-info-desc'>{user.desc}</span>
                </div>
            </div>
            <div className="profil-right-bottom">
                <Feed username={username}/>
                <RightBar user={user}/>
            </div>
        </div>
      </div>
    </>
  )
}
