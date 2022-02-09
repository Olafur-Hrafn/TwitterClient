import React, { useState } from 'react';
import styles from './styles.css';
import { Button, Form } from 'react-bootstrap';
import { IoImageOutline, IoStatsChartOutline } from 'react-icons/io5';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';

import App from '../../App';

const Post = (props) => {
  const [tweetBox, SetTweetBox] = useState('');

  let tweet = '';
  let ActiveUser = props.data.user;
  let image = props.data.user.userAvatar;

  // handlePost returns tweetBox and userId back to parent to then be used in POST
  async function handlePost() {
    await props.data.setNewTweetText({
      userAvatar:image,
      text: tweetBox,
      userId: ActiveUser.userId,
      userHandle: ActiveUser.userHandle,
      userName: ActiveUser.userName,

    });

    SetTweetBox('');

    // þarf að fá set TweetText til að klárast áður en ég get græjað callPostFunc
  }

  function handleChange(e) {
    SetTweetBox(e.target.value);
  }

  return (
    <div className='container'>
      <h2 onClick={() => console.log(image)}>Home</h2>
      <div className='cardContainer'>
        <div className='cardCol1'>
          <img
            src={ActiveUser.userAvatar}
            alt='userimage'
            className='postAvatar rounded-circle img-thumbnail'
          />
          <form className='form'>
            <textarea
              type='text'
              placeholder='What´s on your mind'
              onChange={handleChange}
              className='postInput'
            ></textarea>
          </form>
        </div>

        <div className='cardCol2'>
          <div onClick={() => console.log(tweetBox)} className='postIcons'>
            <IoImageOutline />
            <AiOutlineFileGif />
            <BsEmojiSmile />
            <IoStatsChartOutline />
          </div>

          <Button variant='primary' className='postButton' onClick={handlePost}>
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Post;
