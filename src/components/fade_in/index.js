
import React from 'react';
import './fade_in.css';

class FadeIn extends React.Component {
  render() {
    let duration = this.props.duration;
    let css = duration ? { 'animationDuration': `${duration}s` } : {};

    return (
      <div style={css} className="fade-in-base fade-in-duration">
        { this.props.children }
      </div>
    );
  }
}

export default FadeIn;
