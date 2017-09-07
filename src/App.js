import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demos from './demo/demos';
import hljs from 'highlightjs';
import styles from 'highlightjs/styles/atom-one-light.css';

class App extends Component {
  componentDidMount() {
    hljs.initHighlightingOnLoad();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Content">
          <Demos />
        </div>
      </div>
    );
  }
}

export default App;
