
import React from 'react';
import './demos.css';

import DemoFadeIn from './demo_fade_in';

class Demos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentDemo: (<p>React Components demos</p>)};
  }

  showDemo = (ev) => {
    let key = ev.target.dataset.name;

    if(key === 'FadeIn'){
      this.setState({currentDemo: (<DemoFadeIn />)});
    }else{
    }
  }

  render() {
    return (
      <div className="Demos">
        <div className="Menu">
          <ul>
            <li onClick={this.showDemo} data-name="FadeIn">FadeIn</li>
          </ul>
        </div>
        <div className="DemoArea">
          { this.state.currentDemo }
        </div>
      </div>
    );
  }
}

export default Demos;
