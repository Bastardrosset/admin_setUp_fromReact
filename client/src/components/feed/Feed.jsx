import React, { useContext, useEffect, useState } from 'react';
import Post from '../Post/Post';
import Share from '../share/Share';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Feed({username}) {

  const [posts, setPosts] = useState([]);
  const {user}  = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/post/profil/" + username)
        : await axios.get("post/timeline/" +user._id);
        setPosts(res.data)
    };
    fetchPosts();
  }, [username, user._id]); //[] dépendance
  
  return (
    <div className='feed'>
        <div className="feed-wrapper">
            <Share />
            {posts.map((p) => (
              <Post key={p._id} post={p}/>
            ))}
        </div>
    </div>
  )
}
