import React from 'react'
import TopBar from '../../components/topBar/TopBar';
import LeftNav from '../../components/leftBar/LeftNav';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightBar/RightBar';

export default function Profil() {
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
                        src='/img/noBanner.jpg' 
                        alt=''/>
                    <img 
                        className='profil-user-img'
                        src='/img/noAvatar.png' 
                        alt=''/>
                </div>
                <div className="profil-info">
                    <h4 className='profil-info-name'>Xav</h4>
                    <span className='profil-info-desc'>Hello friends</span>
                </div>
            </div>
            <div className="profil-right-bottom">
                <Feed />
                <RightBar profil/>
            </div>
        </div>
      </div>
    </>
  )
}
