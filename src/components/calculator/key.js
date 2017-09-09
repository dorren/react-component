import React from 'react';
import './calculator.css';

class Key extends React.Component {
  onPress = () => {
    this.props.onPress(this.props.value);
  }

  display() {
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
          onClick={ this.onPress }>
        { this.display() }
      </td>
    );
  }
}

export default Key;
