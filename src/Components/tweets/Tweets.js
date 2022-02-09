import React, { useState, useEffect } from 'react';
import style from './style.css';
import { GoVerified } from 'react-icons/go';
import { FaRegComment } from 'react-icons/fa';
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import Modal from '../../Modal/Modal';
import moment from 'moment';
import axios from 'axios';
import { Link, BrowserRouter, useNavigate } from 'react-router-dom';
//import TweetSelectedScreen from '../../pages/TweetSelectedScreen';

const Tweets = (props) => {
  const activeUserId = props.data.user.userId;
  const activeUserInfo = props.data.user;
  const [isOpen, SetIsOpen] = useState(false);

  const [tweetModelData, SetTweetModelData] = useState([]);
  const [activeHeart, SetActiveHeart] = useState({ hearts: [] });
  const navigate = useNavigate();

  // function to change heart(like) color and change counter, not working good enough
  function updateTweetCounters(id, tweet, idx) {
    const newArr = activeHeart.hearts;
    if (activeHeart.hearts.includes(idx)) {
      console.log(newArr);
      const index = newArr.indexOf(idx);
      newArr.splice(index, 1);
      console.log(newArr);
      SetActiveHeart({ hearts: [...newArr] });
    } else {
      SetActiveHeart({ hearts: [...activeHeart.hearts, idx] });
    }
    // Put call to change like counter
    const likeCounter = tweet.likes + 1;
    console.log(`https://localhost:44300/api/tweet/${id}`);
    axios
      .put(`https://localhost:44300/api/tweet/${id}`, {
        likes: likeCounter,
        tweetText: tweet.tweetText,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  async function handlePostCall() {
    await props.data.postReply();
    SetIsOpen(false);
    window.location.reload(false);
  }

  const tweetList = props.data.tweetData;
  // filters out the tweets from active user

  function matchIds() {
    const clone = [...tweetList];

    for (let i = 0; i < props.data.accounts.length; i++) {
      for (let k = 0; k < clone.length; k++) {
        if (props.data.accounts[i].userId === clone[k].userId) {
          clone[k]['image'] = props.data.accounts[i].userAvatar;
        }
      }
    }

    // Fall sem að breytir timestamp í hours eða days og pluggar inn í clone array
    clone.forEach((item) => {
      var a = moment(item.dateOfPost);

      var y = moment().format();
      const x = calculateTime(a, y);

      if (x < 25) {
        item.dateOfPost = x + 'h';
      }
      // else if(x > 24){
      //   let y = x;
      //   y = y/24;
      // Græja fyrir daganna..
      //   //item.dateOfPost = y + "d"
      // }
    });

    return clone;
  }

  const newTweetList = matchIds();

  const filteredList = newTweetList.filter((tweet) => {
    return tweet.userId !== props.data.user.userId;
  });

  async function changeRoute(tweet) {
    await props.data.setActiveTweet(tweet.tweetId);
    await props.data.getTweetDataById(tweet.tweetId);
    await props.data.getUserByHandle(tweet.userHandle);
    console.log(tweet);
    navigate('/Tweet');
  }
  function handleReplyClick(tweet) {
    console.log(props.data.user.userId);
    props.data.SetReplyData({
      replyContent: props.data.replyData.replyContent,
      userId: props.data.user.userId,
      tweetId: tweet.tweetId,
    });

    SetIsOpen(true);
    console.log('herna');
    console.log(tweet);
    SetTweetModelData(tweet);
  }

  function calculateTime(a, b) {
    const result = Math.abs(Math.round(a.diff(b, 'hours') / 24));
    const time = '' + result;
    console.log(time);
    return time;
  }
  function test(tweet){
    console.log(tweet)
  }

  // list fer í gegnum filteraðan lista og mappar í lista af tweetum
  const list = filteredList.map((tweet, idx) => (
    <div key={tweet.id} className='tweetCardContainer'>
      <div className='tweetCardAvatar' key={tweet.tweetId}>
        <img
          src={tweet.userAvatar}
          alt='userimage'
          className='tweetAvatar rounded-circle img-thumbnail'
        />
      </div>
      <div className='textSpaceWrapper'>
        <div
          onClick={() => changeRoute(tweet)}
          className='tweetCardTextContainer'
        >
          <div className='tweetNameSpace'>
            <h6>
              {tweet.userName}
              <span className='verifiedIcon spacer'>
                <GoVerified />
              </span>
            </h6>
            <h6>{tweet.userHandle}</h6>
            <h6>
              <span className='spacer'>-</span> {tweet.dateOfPost}
            </h6>
          </div>
          <div className='tweetContent'>{tweet.tweetText}</div>
        </div>
        <div>
          <div className='tweetCardSocialIcons'>
            <div
              onClick={() => handleReplyClick(tweet)}
              className='socialIcons'
            >
              <FaRegComment />
              {tweet.replies.length}
            </div>
            <div className='socialIcons'>
              <AiOutlineRetweet />
              {tweet.retweetId}
            </div>
            <div
              key={tweet[idx]}
              onClick={() => updateTweetCounters(tweet.tweetId, tweet, idx)}
              className={
                activeHeart.hearts.includes(idx) ? 'heart' : 'socialIcons'
              }
            >
              <AiOutlineHeart />
              {tweet.likes}
            </div>
            <div onClick={() => test(tweet)} className='socialIcons'>
              <AiOutlineShareAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {}, [activeHeart]);

  return (
    <div>
      <div>{list}</div>
      <Modal
        open={isOpen}
        onClose={() => SetIsOpen(false)}
        onSend={props.data.SetReplyData}
        postReply={handlePostCall}
        data={tweetModelData}
        userinfo={activeUserInfo}
      >
        <textarea
          className='modalInput'
          placeholder='Tweet your reply'
          onChange={(e) => {
            const val = e.target.value;
            props.data.SetReplyData((prevState) => {
              return { ...prevState, replyContent: val };
            });
          }}
        ></textarea>
      </Modal>
    </div>
  );
};

export default Tweets;
