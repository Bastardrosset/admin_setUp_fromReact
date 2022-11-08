import React from 'react';
import {Users} from '../../dummyData.js';
import Online from '../online/Online.jsx';

export default function RightBar({user}) {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;


  const HomeRightBar = () => {
    return (
    <>
    <h4 className='right-bar-title'>Amis en ligne</h4>
        <ul className='right-bar-friend-list'>
          {Users.map((u) => (
            <Online key= {u.id} user= {u}/>
          ))}
        </ul>
    </>
    )
  }

  const ProfilRightBar = () => {
    return (
      <>
      <h4 className='right-bar-title-infos'>user infos</h4>
      <div className="right-bar-infos">
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">City: </span>
          <span className="right-bar-info-value">{user.city}</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">From: </span>
          <span className="right-bar-info-value">{user.from}</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">Relationship: </span>
          <span className="right-bar-info-value">{
            user.relationship === 1 
            ? "Célibataire" 
            : user.relationship === 1
            ? "Marié"
            : " - "}</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='right-bar'>
      <div className="right-bar-wrapper">
        {user ? <ProfilRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
