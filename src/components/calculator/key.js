import React from 'react';
import './calculator.css';

class Key extends React.Component {
  onPress = () => {
    this.props.onPress(this.props.value);
  }
  onKeyUp = () => {
    console.log("key up");

  }
  render() {
    let span = this.props.span ? this.props.span : 1;
    let classes = this.props.color ? `key ${this.props.color}` : "key";
    if(this.props.isLeft){
      classes += " left";
    }
    return (
      <td colSpan={span} className={classes}
          onClick={ this.onPress }>
        { this.props.value }
      </td>
    );
  }
}

export default Key;
