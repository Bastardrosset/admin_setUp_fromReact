import React from 'react';
import Feed from '../../components/feed/Feed';
import LeftNav from '../../components/leftBar/LeftNav';
import TopBar from '../../components/topBar/TopBar';
import RightBar from '../../components/rightBar/RightBar'

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="home-container">
        <LeftNav />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}

export default Home
