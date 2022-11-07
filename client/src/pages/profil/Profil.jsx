import React, { useEffect, useState } from 'react'
import TopBar from '../../components/topBar/TopBar';
import LeftNav from '../../components/leftBar/LeftNav';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';
import axios from 'axios';

export default function Profil() {

  const [user, setUser] = useState({});

  const publicFolder = process.env.REACT_APP_API_URL;

  
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/auth?username=xavier`)
      setUser(res.data)
    };
    fetchUser();
  }, []);

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
                          user.Picture
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
                <Feed username='xavier'/>
                <RightBar user={user}/>
            </div>
        </div>
      </div>
    </>
  )
}
