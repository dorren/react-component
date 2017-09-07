import React from 'react';
import './slide_in.css';

class SlideIn extends React.Component {
  render() {
    let duration = this.props.duration;
    let css = duration ? { animation: `${duration}s ease-out 0s 1 slideInFromLeft` } : {};

    return (
      <div style={css} className="SlideIn">
        { this.props.children }
      </div>
    );
  }
}

export default SlideIn;
