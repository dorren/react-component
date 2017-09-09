import React from 'react';
import './calculator.css';
import Lcd from './lcd';
import Keypad from './keypad';
import Worker from './worker';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.worker = new Worker();
    this.state = {value: this.worker.output()};
  }

  onPress = val => {
    this.worker.accept(val);
    this.setState({value: this.worker.output()});
  }

  lcd() {
    let str = "" + this.state.value;
    let lcd_css = "lcd";
    if(str.length > 13){
      lcd_css += " digits20";
    }else if (str.length > 7){
      lcd_css += " digits13";
    }

    return (
      <tbody>
        <tr>
          <td colSpan="4" className={ lcd_css }>
            { this.state.value }
          </td>
        </tr>
      </tbody>
    );
  }
  render() {
    return (
      <table className="calc">
        <Lcd value= { this.state.value } type={this.props.type} />
        <Keypad onPress={ this.onPress } type={this.props.type} />
      </table>
    );
  }
}

export default Calculator;
