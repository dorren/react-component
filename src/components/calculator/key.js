import React from 'react';
import './calculator.css';

class Key extends React.Component {
  onPress = () => {
    this.setStyle();
    this.props.onPress(this.props.value);
  }

  clearAnimation = () => {
    this.style = {};
    this.forceUpdate();
  }

  setStyle(){
    let s = 0.3;
    let classes = this.props.classes;
    this.style = {animation: `${s}s keyPressed`};

    if(classes && classes.indexOf("orange") !== -1){
      this.style={animation: `${s}s orangePressed`};
    }else if(classes && classes.indexOf("num") !== -1){
      this.style={animation: `${s}s numPressed`};
    }
    this.setState({}, () => {
      window.setTimeout(this.clearAnimation, s*1000);
    });
  }

  keyText() {
    if(this.props.display){
      return this.props.display;
    }else{
      return this.props.value;
    }
  }

  render() {
    let span = this.props.span ? this.props.span : 1;
    let classes = this.props.classes ? `key ${this.props.classes}` : "key";

    return (
      <td colSpan={span} className={classes}
          onClick={ this.onPress }
          style={this.style}
          >
        { this.keyText() }
      </td>
    );
  }
}

export default Key;
