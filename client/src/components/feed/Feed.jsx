import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import Share from '../share/Share';
import axios from 'axios';

export default function Feed({username}) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/post/profil/" + username)
        : await axios.get("post/timeline/63681b6baab2e7895b994b5e");
        setPosts(res.data)
    };
    fetchPosts();
  }, [username]); //[] dépendance
  
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
