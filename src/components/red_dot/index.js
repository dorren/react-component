import React from 'react';
import './red_dot.css';

class RedDot extends React.Component {
  render() {
    let dot = (<span className="Dot gone"/>);

    if(this.props.count && this.props.count > 0){
      if(this.props.showCount){
        let dotCss = "Dot WithCount";
        let str = this.props.count;
        if(this.props.count >= 100){
          dotCss += " twoDigits";
          str = "…";
        }else if(this.props.count >= 10 ){
          dotCss += " twoDigits";
        }
        dot = (<span className={ dotCss }>{ str }</span>);
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
