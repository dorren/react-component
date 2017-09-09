import React from 'react';
import './demos.css';
import logo from '../logo.svg';
import '../App.css';

import DemoFadeIn from './demo_fade_in';
import DemoSlideIn from './demo_slide_in';
import DemoCarousel from './demo_carousel';
import DemoProgressBar from './demo_progress_bar';
import DemoRedDot from './demo_red_dot';
import Calculator from '../components/calculator';
import WithSrc from './WithSrc';

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
      'Calculator': this.calculatorDemo()
    };
    this.state = {currentDemo: this.defaultDemo()};
  }

  defaultDemo() {
    return (<p>React Components demos</p>);
  }

  calculatorDemo() {
    return WithSrc.createDemo(
                 (<Calculator />),
                 "<Calculator />");
  }

  showDemo = (ev) => {
    let key = ev.target.dataset.name;
    this.setState({currentDemo: this.choices[key]});
  }

  render() {
    let names = ["Home", "FadeIn", "SlideIn", "Carousel", "ProgressBar",
                 "RedDot", "Calculator"];
    let links = names.map( (name,i) =>
      (<li onClick={this.showDemo} key={i} data-name={name}>{name}</li>));

    return (
      <div className="Demos">
        <div className="Menu">
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          <ul>
            { links }
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
