import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from '../components/feed/Feed';
import Post from '../components/post/Post';
import Discover from '../components/discover/Discover';
import Profile from '../components/profile/Profile';

//Routes for main content pages of app
const Content = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Feed}/>
        <Route exact path='/post' component={Post}/>
        <Route exact path='/discover' component={Discover}/>
        <Route path='/profile/:userId' component={Profile}/>
      </Switch>
    </main>
  );
};

export default Content;
