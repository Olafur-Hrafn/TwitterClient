import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Button } from 'react-bootstrap';
import { BsTwitter, BsBookmark, BsPerson, BsThreeDots } from 'react-icons/bs';
import { FaHashtag, FaRegListAlt } from 'react-icons/fa';
import { BiHomeCircle } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { RiQuillPenFill } from 'react-icons/ri';
import Image from 'react-bootstrap/Image';

import './NavBarstyle.css';

const Navigation = (props) => {
 
  return (
    <>
      <Router>
        <Navbar id='navbar'>
          <Container id='navContainer'>
            <Row>
              <ul className='navigationList'>
                <div className='twitterlogo'>
                  <BsTwitter />
                </div>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <BiHomeCircle />
                    </span>
                    <span className='navItemText'>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <FaHashtag />
                    </span>
                    <span className='navItemText'>Explore</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <IoIosNotificationsOutline />
                    </span>
                    <span className='navItemText'>Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <AiOutlineMail />
                    </span>
                    <span className='navItemText'>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <BsBookmark />
                    </span>
                    <span className='navItemText'>Bookmarks</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <FaRegListAlt />
                    </span>
                    <span className='navItemText'>Lists</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <BsPerson />
                    </span>
                    <span className='navItemText'>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to='/' className='navigationListItem'>
                    <span className='navIcon'>
                      <BsThreeDots />
                    </span>
                    <span className='navItemText'>More</span>
                  </Link>
                </li>
              </ul>
              <Button variant='primary' className='navButton'>
                Tweet
                <RiQuillPenFill className='navButtonIcon' />
              </Button>

              <div className='navUserCardContainer'>
                <img
                  src={props.user.userAvatar}
                  className=' rounded-circle img-thumbnail'
                  alt='imgage of active user'
                  id='navAvatar'
                />
                <div className='navUserText'>
                  <p>{props.user.userName}</p>
                  <p>{props.user.userHandle}</p>
                </div>
              </div>
            </Row>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};

export default Navigation;
