import React from 'react';
import './demos.css';
import logo from '../logo.svg';
import '../App.css';

import Hamburger from './hamburger';
import DemoFadeIn from './demo_fade_in';
import DemoSlideIn from './demo_slide_in';
import DemoCarousel from './demo_carousel';
import DemoProgressBar from './demo_progress_bar';
import DemoRedDot from './demo_red_dot';
import DemoCalculator from './demo_calculator';

class Demos extends React.Component {
  constructor(props) {
    super(props);

    this.choices = {
      'Home': this.defaultDemo(),
      'FadeIn':  (<DemoFadeIn />),
      'SlideIn': (<DemoSlideIn />),
      'Carousel':(<DemoCarousel />),
      'ProgressBar': (<DemoProgressBar />),
      'RedDot': (<DemoRedDot />),
      'Calculator': (<DemoCalculator />)
    };
    this.state = {currentDemo: this.defaultDemo(), menuOpen: true};
  }

  defaultDemo() {
    return (<p>React Components demos</p>);
  }

  showDemo = (ev) => {
    let key = ev.target.dataset.name;
    this.setState({currentDemo: this.choices[key]});
  }

  toggleMenu = (open)=> {
    this.setState({menuOpen: open});
  }

  render() {
    let names = ["Home", "FadeIn", "SlideIn", "Carousel", "ProgressBar",
                 "RedDot", "Calculator"];
    let links = names.map( (name,i) =>
      (<div className="link" onClick={this.showDemo} key={i} data-name={name}>{name}</div>));
    let menuCss = this.state.menuOpen ? "open" : "close";

    return (
      <div className="Demos">
        <div className={`Menu ${menuCss}`}>
          <Hamburger onClick={ this.toggleMenu }/>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          <div className="links">
            { links }
          </div>
        </div>

        <div id="main">

          <div className="DemoContent">
            { this.state.currentDemo }
          </div>
        </div>
      </div>
    );
  }
}

export default Demos;
