import React from 'react'
import Post from '../Post/Post'
import Share from '../share/Share'

export default function Feed() {
  return (
    <div className='feed'>
        <div className="feed-wrapper">
            <Share />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  )
}
