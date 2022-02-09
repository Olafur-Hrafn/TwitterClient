import React from 'react';
import Replies from '../Components/replies/Replies';
import Tweet from '../Components/tweet/Tweet'

const TweetSelectedScreen = (props) => {

  return (
    <div>
    <Tweet data={props}/>
    <Replies data={props}/>
    </div>
  )
}
export default TweetSelectedScreen;