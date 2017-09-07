
import React from 'react';
import './demos.css';
import logo from '../logo.svg';
import '../App.css';

import DemoFadeIn from './demo_fade_in';
import DemoSlideIn from './demo_slide_in';
import DemoCarousel from './demo_carousel';

class Demos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentDemo: this.defaultDemo()};
  }

  defaultDemo() {
    return (<p>React Components demos</p>);
  }

  showDemo = (ev) => {
    let key = ev.target.dataset.name;

    if(key === 'Home'){
      this.setState({currentDemo: this.defaultDemo()});
    }else if(key === 'FadeIn'){
      this.setState({currentDemo: (<DemoFadeIn />)});
    }else if(key === 'SlideIn'){
      this.setState({currentDemo: (<DemoSlideIn />)});
    }else if(key === 'Carousel'){
      this.setState({currentDemo: (<DemoCarousel />)});
    }else{
    }
  }

  render() {
    return (
      <div className="Demos">
        <div className="Menu">
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          <ul>
            <li onClick={this.showDemo} data-name="Home">Home</li>
            <li onClick={this.showDemo} data-name="FadeIn">FadeIn</li>
            <li onClick={this.showDemo} data-name="SlideIn">SlideIn</li>
            <li onClick={this.showDemo} data-name="Carousel">Carousel</li>
          </ul>

        </div>
        <div className="DemoContent">
          { this.state.currentDemo }
        </div>
      </div>
    );
  }
}

export default Demos;
