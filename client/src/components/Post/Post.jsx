import React, { useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from 'axios';
import {dateParser} from '../Utils'
import { Link } from 'react-router-dom';


export default function Post({post}) {

    const [likes, setLikes] = useState(post.likers.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?userId=${post.userId}`)
          setUser(res.data)
        };
        fetchUser();
      }, [post.userId]);

    const likeHandler = () => {
        setLikes(isLiked ? likes-1 : likes+1);
        setIsLiked(!isLiked);
    }

  return (
    <div className='post'>
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                    <Link to={`profil/${user.username}`}>
                        <img 
                            className='post-profil-img' 
                            src={publicFolder + user.profilPicture || publicFolder+"/noAvatar.png"} 
                            alt='Profil poster'/>
                    </Link>
                    <span 
                        className='post-username'>
                            {user.username}
                    </span>
                    <span className='post-date'>{dateParser(post.createdAt)}</span>
                </div>
                <div className="post-top-right">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="post-center">
                <span className='post-text'>{post?.message}</span>
                <img 
                    className='post-img'
                    src={publicFolder + post.postPicture} 
                    alt='Contenu en lien avec le post'/>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <ThumbUpIcon 
                        className='post-like-icon'
                        onClick={likeHandler}/>
                    <span className='post-likes-counter'>{likes} like</span>
                </div>
                <div className="post-bottom-right">
                    <MessageIcon className='post-comment-icon'/>
                    <span className='post-comments-counter'>{post.comment} people comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
