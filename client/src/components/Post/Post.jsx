import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


export default function Post() {
  return (
    <div className='post'>
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <img className='post-profil-img' src='/img/personn/noAvatar.png' alt='Profil poster'/>
                    <span className='post-username'>Xav</span>
                    <span className='post-date'>5 min ago</span>
                </div>
                <div className="post-top-right">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="post-center">
                <span className='post-text'>Hey it's my post</span>
                <img 
                    className='post-img'
                    src='/img/post/bitcoin.jpg' 
                    alt='Contenu en lien avec le post'/>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <ThumbUpIcon className='post-like-icon'/>
                    <span className='post-likes-counter'>1 like</span>
                </div>
                <div className="post-bottom-right">
                    <MessageIcon className='post-comment-icon'/>
                    <span className='post-comments-counter'>3 people comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
