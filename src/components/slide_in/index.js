import React from 'react';
import './slide_in.css';

class SlideIn extends React.Component {
  buildStyle(){
    let style = {duration: 1, delay: 0, from: 'Left'};

    if(this.props.duration){
      style.duration = this.props.duration;
    }
    if(this.props.delay){
      style.delay = this.props.delay;
    }

    if(this.props.from){
      if(this.props.from === 'right'){
        style.from = 'Right';
      }else if(this.props.from === 'top'){
        style.from = 'Top';
      }else if(this.props.from === 'bottom'){
        style.from = 'Bottom';
      }
    }

    let val = `${style.duration}s ease-out ${style.delay}s 1 normal both slideInFrom${style.from}`;
    return {animation: val};
  }

  render() {
    let css = this.buildStyle();

    return (
      <div style={css}>
        { this.props.children }
      </div>
    );
  }
}

export default SlideIn;
