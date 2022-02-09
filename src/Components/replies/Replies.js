import React, { useEffect, useState } from 'react';
import style from './style.css';

const Replies = (props) => {
  const [replyData, SetReplyData] = useState([]);

  // setja prop data í state
  function setUpData() {
    if (props.data.selectedTweetData.replies) {
      const data = props.data.selectedTweetData.replies;
      SetReplyData(data);
    }
  }
  // ná í viðeigandi upplysingar á þeim sem á hvert reply
  function getName(userId) {
    let name;
    let userName;
    let image;
    let userHandle;
    let testArr = [];

    for (let i = 0; i < props.data.accounts.length; i++) {
      if (userId === props.data.accounts[i].userId) {
        name = props.data.accounts[i].userName;
        userName = props.data.accounts[i].userName;
        image = props.data.accounts[i].userAvatar;
        userHandle = props.data.accounts[i].userHandle;

        testArr.push(userName, image, userHandle);
      } else {
      }
    }

    return testArr;
  }

  const list = replyData.map((item) => (
    <div className='repliesContainer'>
      <div>
        <img
          className='image'
          src={getName(item.userId)[1]}
          alt='user imgage'
        ></img>
      </div>
      <div className='nameSpaceWrapper'>
        <div className='nameSpace'>
          <h6>{getName(item.userId)[0]}</h6>
          <h6 className='spacer'>-</h6>
          <h6>{getName(item.userId)[2]}</h6>
        </div>
        <div className='replyContext'>
          <h6>{item.replyContent}</h6>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    setUpData();
  }, []);

  return <div className='container'>{list}</div>;
};
export default Replies;
