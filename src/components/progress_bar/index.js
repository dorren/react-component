import React from 'react';
import './progress_bar.css';

const ProgressBar = props => {
  let pct = `${props.percent}%`;
  let innerStyle = {width: pct };
  let color = props.color ? props.color : "blue";
  let innerClass = "ProgressInner " + color;

  return (
    <div className="ProgressOuter">
      <div style={innerStyle} className={innerClass}>
        { pct }
      </div>
    </div>
  )
}

export default ProgressBar;
