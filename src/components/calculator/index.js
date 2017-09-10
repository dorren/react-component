import React from 'react';
import './calculator.css';
import Lcd from './lcd';
import Keypad from './keypad';
import Worker from './math/worker';

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
