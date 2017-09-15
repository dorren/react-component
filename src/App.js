import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './menu';
import Demo from './demo/demo';

var Home = (props) => {
  return (<p>React Components demos</p>);
}

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="Demos">
          <Menu />

          <div id="main">
            <Route exact path="/"     component={Demo} />
            <Route path="/demo/:name"  component={Demo} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
