import { React, useEffect } from 'react';
import style from './style.css';
import { BsThreeDots } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

const Discovery = (props) => {
  const trendArray = [
    {
      header: 'trending in asia',
      content: 'Hentai',
      tweetCount: '140k Tweets',
    },
    { header: 'trending in sports', content: 'NUFC', tweetCount: '10k Tweets' },
    {
      header: 'trending in Music',
      content: 'Yelawolf',
      tweetCount: '440k Tweets',
    },
    {
      header: 'trending in danmark',
      content: 'erik christansen',
      tweetCount: '20k Tweets',
    },
    {
      header: 'trending in asia',
      content: 'Hentai',
      tweetCount: '240k Tweets',
    },
  ];
  let userList;

  async function setUpData() {
    userList = await [...props.userData];
  }

  useEffect(() => {
    setUpData();
  }, []);

  const trendList = trendArray.map((item) => (
    <div className='trendCard'>
      <div className='trendText'>
        <p>{item.header}</p>
        <p>{item.content}</p>
        <p>{item.tweetCount}</p>
      </div>

      <p>
        <BsThreeDots />
      </p>
    </div>
  ));

  return (
    <div className='rightSidecontainer'>
      <div className='searchBarContainer'>
        <input className='searchBar' placeholder='Search Twitter'></input>
      </div>
      <div className='trendsContainer'>
        <div className='headerText'>
          <h5>Trends for You</h5>
          <FiSettings />
        </div>
        <div className=''>{trendList}</div>
      </div>
    </div>
  );
};

export default Discovery;
