import React, { Component } from 'react';
import Header from './common/Header';
import Content from './common/Content';
import './styles/App.css';

//Main container that renders the same header for every content page

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
