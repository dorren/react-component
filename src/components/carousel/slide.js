import React from 'react';
import './carousel.css';

class Slide extends React.Component {
  render() {
    let classes = "Slide ";
    if(this.props.direction)
      classes += this.props.direction;

    return (
      <div key={this.props.key || 0 } className={ classes }>
        { this.props.children }
      </div>
    );
  }
}

export default Slide;
