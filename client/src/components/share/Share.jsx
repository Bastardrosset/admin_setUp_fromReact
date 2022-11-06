import React from 'react'
import PermMediaIcon from '@mui/icons-material/PermMedia';


export default function Share() {
  return (
    <div className='share'>
        <div className="share-wrapper">
            <div className="share-top">
                <img className='share-profil-img' src='/img/personn/ben.png' alt='Avatar par default' />
                <input 
                    placeholder= "What's news xav"
                    type='text' 
                    className='share-input' />
            </div>
            <hr className='share-hr' />
            <div className="share-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <PermMediaIcon className='share-icon' />
                        <span className='share-option-text'>Photo or vidéo</span>
                    </div>
                </div>
                <button className='share-button'>Share</button>
            </div>
        </div>
    </div>
  )
}
