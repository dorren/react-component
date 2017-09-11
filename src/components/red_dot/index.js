import React from 'react';
import './red_dot.css';

class RedDot extends React.Component {
  render() {
    let dot = (<span className="Dot gone"/>);
    if(this.props.count && this.props.count > 0){
      if(this.props.showCount){
        dot = (<span className="Dot WithCount">{ this.props.count }</span>);
      }else{
        dot = (<span className="Dot" />);
      }
    }

    return (<div className="RedDot">
              { dot }
              { this.props.children }
            </div>);
  }
}

export default RedDot;
