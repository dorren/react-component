import React from 'react';
import './demos.css';

import Hamburger from './hamburger';
import DemoFadeIn from './demo_fade_in';
import DemoSlideIn from './demo_slide_in';
import DemoCarousel from './demo_carousel';
import DemoProgressBar from './demo_progress_bar';
import DemoRedDot from './demo_red_dot';
import DemoCalculator from './demo_calculator';
import DemoSlider from './demo_slider';
import DemoOctopus from './demo_octopus';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.choices = {
      'Home': this.defaultDemo(),
      'FadeIn':      DemoFadeIn,
      'SlideIn':     DemoSlideIn,
      'Carousel':    DemoCarousel,
      'ProgressBar': DemoProgressBar,
      'Slider':      DemoSlider,
      'RedDot':      DemoRedDot,
      'Calculator':  DemoCalculator,
      'Octopus':     DemoOctopus
    };
    this.state = {currentDemo: this.defaultDemo()};
  }

  defaultDemo() {
    return (
      <p>React Components demos. Source is at&nbsp;
         <a href="https://github.com/dorren/react-components">
           github.
         </a>
      </p>);
  }
  componentDidMount(){
    this.updateDemo(this.props);
  }

  componentWillReceiveProps(nextProps, nextContext){
    this.updateDemo(nextProps);
  }

  updateDemo(props){
    if(props.match.path === "/"){
      this.setState({currentDemo: this.choices["Home"]});
    }else if(props.match.params){
      let name = props.match.params.name;
      const CustomTag = this.choices[name];
      this.setState({currentDemo: <CustomTag />});
    }
  }

  showDemo = (ev) => {
    let key = ev.target.dataset.name;
    this.setState({currentDemo: this.choices[key]});
  }


  render() {
    return (
      <div className="DemoContent">
        { this.state.currentDemo }
      </div>
    );
  }
}

export default Demo;
