import React from 'react';
import './calculator.css';
import Key from './key';
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

  render() {
    let str = "" + this.state.value;
    let lcd_css = "lcd";
    if(str.length > 13){
      lcd_css += " digits20";
    }else if (str.length > 7){
      lcd_css += " digits13";
    }

    return (
      <div className="calc">
        <table className="keypad">
          <tbody>
            <tr>
              <td colSpan="4" className={ lcd_css }>
                { this.state.value }
              </td>
            </tr>
            <tr>
              <Key value="C" onPress={ this.onPress } isLeft="true" />
              <Key value="±" onPress={ this.onPress } />
              <Key value="%" onPress={ this.onPress } />
              <Key value="÷" onPress={ this.onPress } color="orange"/>
            </tr>
            <tr>
              <Key value="7" onPress={ this.onPress } isLeft="true" />
              <Key value="8" onPress={ this.onPress }/>
              <Key value="9" onPress={ this.onPress } />
              <Key value="×" onPress={ this.onPress } color="orange"/>
            </tr>
            <tr>
              <Key value="4" onPress={ this.onPress } isLeft="true" />
              <Key value="5" onPress={ this.onPress } />
              <Key value="6" onPress={ this.onPress } />
              <Key value="−" onPress={ this.onPress } color="orange"/>
            </tr>
            <tr>
              <Key value="1" onPress={ this.onPress } isLeft="true" />
              <Key value="2" onPress={ this.onPress } />
              <Key value="3" onPress={ this.onPress } />
              <Key value="+" onPress={ this.onPress } color="orange"/>
            </tr>
            <tr>
              <Key value="0" onPress={ this.onPress } span="2" isLeft={true}/>
              <Key value="." onPress={ this.onPress } />
              <Key value="=" onPress={ this.onPress } color="orange"/>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calculator;
