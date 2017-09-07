import React from 'react';
import './carousel.css';

class Carousel extends React.Component {
  constructor(props){
    super(props);


    this.state = {len: props.children.length,
                  curr: 0,
                  style: {width: props.width, height: props.height}};
    this.slides = [this.props.children[0]];  // slides to render
  }

  handlePrev = () => {
    let prevIndex = this.state.curr;
    let nextIndex = this.state.curr - 1;

    let prevSlide = React.cloneElement(this.props.children[prevIndex],
                                       {key: prevIndex, direction: "OutToRight"});
    let nextSlide = React.cloneElement(this.props.children[nextIndex],
                                       {key: nextIndex, direction: "InFromLeft"});
    this.slides = [prevSlide, nextSlide];
    this.setState({curr: nextIndex});
  }

  handleNext = () => {
    let prevIndex = this.state.curr;
    let nextIndex = this.state.curr + 1;

    let prevSlide = React.cloneElement(this.props.children[prevIndex],
                                       {key: prevIndex, direction: "OutToLeft"});
    let nextSlide = React.cloneElement(this.props.children[nextIndex],
                                       {key: nextIndex, direction: "InFromRight"});
    this.slides = [prevSlide, nextSlide];
    this.setState({curr: nextIndex});
  }

  render() {
    let prevDisabled = this.state.curr === 0;
    let nextDisabled = this.state.curr === this.props.children.length - 1;

    return (
      <div className="Carousel" style={ this.state.style }>
        { this.slides }
        <span className={`Arrow Left ${prevDisabled ? "disabled" : ""}`}
          onClick={this.handlePrev}>{'\u27E8'}
        </span>
        <span className={`Arrow Right ${nextDisabled ? "disabled" : ""}`}
          onClick={this.handleNext}>{'\u27E9'}
        </span>
      </div>
    );
  }
}

export default Carousel;
