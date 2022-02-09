import React, { useEffect } from 'react';
import style from './style.css';

const Tweet = (props) => {
  
  async function handlePostCall() {
    const val = props.data.selectedTweetData.tweetId;
    const user = props.data.activeUser.userId;
    document.activeElement.blur();
    await props.data.SetReplyData((prevState) => {
      return { ...prevState, tweetId: val, userId: user };
    });

    await props.data.postReply();
  }

  return (
    <div className='container'>
      <h2>Tweet</h2>
      <div className='tweetCard'>
        <div className='tweetCardNameSpace'>
          <img
            className='avatarImg'
            src={props.data.selectedTweetUserData.userAvatar}
            alt='avatar'
          />
          <div className='nameSpace'>
            <h5>{props.data.selectedTweetData.userName}</h5>
            <h5 className='spacer'>-</h5>
            <p>{props.data.selectedTweetData.userHandle}</p>
          </div>
        </div>
        <div className='tweetCardText'>
          <div>{props.data.selectedTweetData.tweetText}</div>
          <div className='replyContainer'>
            <img
              className='avatarImg'
              src={props.data.activeUser.userAvatar}
              alt='user'
            ></img>
            <textarea
              className='replyInput'
              placeholder='Tweet your reply'
              onKeyDown={(e) => {
                const val = e.target.value;
                props.data.SetReplyData((prevState) => {
                  return { ...prevState, replyContent: val };
                });
              }}
            ></textarea>
            <button className='replyButton' onClick={handlePostCall}>
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tweet;
