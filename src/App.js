import Navbar from './Components/navbar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HomeScreen from './pages/HomeScreen';
import TweetSelectedScreen from './pages/TweetSelectedScreen';
import Discovery from './Components/discovery/Discovery';

function App() {
  const [activeUser, SetActiveUser] = useState([]);
  const [userData, SetUserData] = useState([]);
  const [tweetData, SetTweetData] = useState([]);
  const [newTweet, SetNewTweet] = useState({ text: '', userId: null, });
  const [activeTweet, SetActiveTweet] = useState('');
  const [selectedTweetData, SetSelectedTweetData] = useState([]);
  const [selectedTweetUserData, SetSelectedTweetUserData] = useState([]);
  const [replyData, SetReplyData] = useState({
    replyContent: '',
    tweetId: null,
    userId: activeUser.userId,
  });

  // ná í userData til að nota svo í components
  async function getUserData() {
    const response = await fetch(`https://localhost:44300/api/user`);
    const data = await response.json();
    console.log(data);
    SetUserData(data);
    SetActiveUser(data[0]);
    console.log(userData);
    getTweetData();
  }
// ná í öll Tweet til að nota svo í components
  async function getTweetData() {
    const response = await fetch(`https://localhost:44300/api/tweet`);
    const data = await response.json();
    SetTweetData(data);
    console.log('!! Tweet Data below !!');
    console.log(data);
  }
  // ná í tweetBy id til að nota í model
  async function getTweetDataById(id) {
    const response = await fetch(`https://localhost:44300/api/tweet/${id}`);
    const data = await response.json();
    console.log(data);
    SetSelectedTweetData(data);
  }

  async function getUserByHandle(handle) {
    const response = await fetch(`https://localhost:44300/api/user/${handle}`);
    const data = await response.json();
    console.log(data);
    SetSelectedTweetUserData(data);
  }

  

  //function setTweetText(text) {
  //  SetNewTweet(text);
  //}

  function postTweet() {
    axios
      .post(`https://localhost:44300/api/tweet`, {
        tweetText: newTweet.text,
        retweetId: 0,
        likes: 0,
        userId: newTweet.userId,
        userHandle: newTweet.userHandle,
        userName: newTweet.userName,
        userAvatar:newTweet.userAvatar
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
      window.location.reload(false);
  }

  function postReply() {
    axios
      .post(`https://localhost:44300/api/replies`, {
        replyContent: replyData.replyContent,
        tweetId: replyData.tweetId,
        userId: activeUser.userId,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    
    // passar að postTweet keyri ekki nema það sé örugglega breyting á newTweet.
    if (newTweet.text === '' || newTweet.userId === undefined) {
      console.log('.');
    } else {
      postTweet();
    }
  }, [newTweet]);

  return (
    <Container>
      <Row>
        <Col lg={3} md={1} xs={2} className='columns navColumn'>
          {' '}
          <Navbar user={activeUser} />
        </Col>
        <Col lg={5} md={7} xs={10} className='columns midCol'>
          <BrowserRouter>
            <Routes>
              <Route
                path='/'
                element={
                  <HomeScreen
                    user={activeUser}
                    accounts={userData}
                    post={postTweet}
                    setNewTweetText={SetNewTweet}
                    setActiveTweet={SetActiveTweet}
                    getTweetDataById={getTweetDataById}
                    getUserByHandle={getUserByHandle}
                    tweetData={tweetData}
                    SetReplyData={SetReplyData}
                    replyData={replyData}
                    postReply={postReply}
                  />
                }
              ></Route>
              <Route
                path='/Tweet'
                element={
                  <TweetSelectedScreen
                    activeTweet={activeTweet}
                    setActiveTweet={SetActiveTweet}
                    getTweetDataById={getTweetDataById}
                    setSelectedTweetData={SetSelectedTweetData}
                    SetReplyData={SetReplyData}
                    replyData={replyData}
                    postReply={postReply}
                    selectedTweetData={selectedTweetData}
                    accounts={userData}
                    selectedTweetUserData={selectedTweetUserData}
                    activeUser={activeUser}
                  />
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </Col>
        <Col lg={4} md={4} xs={0} className='columns rightCol'>
          <Discovery userData={userData} activeUser={activeUser} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
