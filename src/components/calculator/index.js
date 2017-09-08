import React from 'react';
import './calculator.css';
import Lcd from './lcd';
import Key from './key';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calc">
        <table className="keypad">
          <tbody>
            <tr>
              <Lcd />
            </tr>
            <tr>
              <Key value="C" isLeft="true" />
              <Key value="±" />
              <Key value="%" />
              <Key value="÷" color="orange"/>
            </tr>
            <tr>
              <Key value="7" isLeft="true" />
              <Key value="8" />
              <Key value="9" />
              <Key value="×" color="orange"/>
            </tr>
            <tr>
              <Key value="4" isLeft="true" />
              <Key value="5" />
              <Key value="6" />
              <Key value="−" color="orange"/>
            </tr>
            <tr>
              <Key value="1" isLeft="true" />
              <Key value="2" />
              <Key value="3" />
              <Key value="+" color="orange"/>
            </tr>
            <tr>
              <Key value="0" span="2" isLeft={true}/>
              <Key value="." />
              <Key value="=" color="orange"/>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
