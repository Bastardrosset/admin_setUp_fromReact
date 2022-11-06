import React from 'react'

export default function RightBar({profil}) {

  const HomeRightBar = () => {
    <>
    <h4 className='right-bar-title'>Amis en ligne</h4>
        <ul className='right-bar-friend-list'>
          <li className='right-bar-friend'>
            <div className="right-bar-profil-img-container">
              <img className='right-bar-profil-img' src='/img/personn/charles.jpg' alt=''/>
              <span className='right-bar-online'></span>
            </div>
            <span className='right-bar-username'>Charles</span>
          </li>
        </ul>
    </>
  }

  const ProfilRightBar = () => {
    return (
      <>
      <h4 className='right-bar-title-infos'>user infos</h4>
      <div className="right-bar-infos">
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">City:</span>
          <span className="right-bar-info-value">Miami beach</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">From:</span>
          <span className="right-bar-info-value">Paris</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">Relationship:</span>
          <span className="right-bar-info-value">Single</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='right-bar'>
      <div className="right-bar-wrapper">
        <ProfilRightBar />
      </div>
    </div>
  )
}
