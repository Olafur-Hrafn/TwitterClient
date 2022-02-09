import React from 'react';
import Post from '../Components/post/Post'
import Tweets from '../Components/tweets/Tweets'


const HomeScreen = (props) => {

  return (
    <div>
    <Post data={props}/>
    <Tweets data={props}/>
    </div>
  )
}
export default HomeScreen;