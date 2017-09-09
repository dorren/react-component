import React from 'react';
import './calculator.css';

class Key extends React.Component {
  onPress = () => {
    this.props.onPress(this.props.value);
  }

  keyText() {
    if(this.props.display){
      return this.props.display;
    }else{
      return this.props.value;
    }
  }

  mouseDown = () =>{
    this.pressed = true;
    this.forceUpdate();
  }
  mouseUp = () =>{
    this.pressed = false;
    this.forceUpdate();
  }

  render() {
    let span = this.props.span ? this.props.span : 1;
    let classes = this.props.classes ? `key ${this.props.classes}` : "key";
    if(this.pressed)
      classes += " pressed";


    return (
      <td colSpan={span} className={classes}
          onClick={ this.onPress }
          onMouseDown = { this.mouseDown }
          onMouseUp =   { this.mouseUp   }
          >
        { this.keyText() }
      </td>
    );
  }
}

export default Key;
