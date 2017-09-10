import React from 'react';
import './calculator.css';
import Key from './key';

class Keypad extends React.Component {
  onPress = val => {
    return this.props.onPress(val);
  }

  basic() {
    return (
      <tbody className="keypad">
        <tr>
          <Key value="C" onPress={ this.onPress } classes="left" />
          <Key value="±" onPress={ this.onPress } />
          <Key value="%" onPress={ this.onPress } />
          <Key value="÷" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="7" onPress={ this.onPress } classes="num left" />
          <Key value="8" onPress={ this.onPress } classes="num" />
          <Key value="9" onPress={ this.onPress } classes="num" />
          <Key value="×" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="4" onPress={ this.onPress } classes="num left" />
          <Key value="5" onPress={ this.onPress } classes="num" />
          <Key value="6" onPress={ this.onPress } classes="num" />
          <Key value="−" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="1" onPress={ this.onPress } classes="num left" />
          <Key value="2" onPress={ this.onPress } classes="num" />
          <Key value="3" onPress={ this.onPress } classes="num" />
          <Key value="+" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="0" onPress={ this.onPress } span="2" classes="num left" />
          <Key value="." onPress={ this.onPress } classes="num" />
          <Key value="=" onPress={ this.onPress } classes="orange"/>
        </tr>
      </tbody>
    );
  }

  scientific() {
    return (
      <tbody className="keypad">
        <tr>
          <Key value="(" onPress={ this.onPress } classes="left" />
          <Key value=")" onPress={ this.onPress }  />
          <Key value="mc" onPress={ this.onPress }  />
          <Key value="m+" onPress={ this.onPress }  />
          <Key value="m-" onPress={ this.onPress }  />
          <Key value="mr" onPress={ this.onPress }  />
          <Key value="C" onPress={ this.onPress } />
          <Key value="±" onPress={ this.onPress } />
          <Key value="%" onPress={ this.onPress } />
          <Key value="÷" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="" onPress={ this.onPress } classes="left" />
          <Key value="square" display={<span>x<sup>2</sup></span>} onPress={ this.onPress }  />
          <Key value="cube"   display={<span>x<sup>3</sup></span>} onPress={ this.onPress }  />
          <Key value="x^y"    display={<span>x<sup>y</sup></span>} onPress={ this.onPress }  />
          <Key value="e^x"    display={<span>e<sup>x</sup></span>} onPress={ this.onPress }  />
          <Key value="10^x"    display={<span>10<sup>x</sup></span>} onPress={ this.onPress }  />
          <Key value="7" onPress={ this.onPress } classes="num" />
          <Key value="8" onPress={ this.onPress } classes="num" />
          <Key value="9" onPress={ this.onPress } classes="num" />
          <Key value="×" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="1/x" onPress={ this.onPress } classes="left" />
          <Key value="sqrt" display={<span><sup>2</sup>√x</span>} onPress={ this.onPress }  />
          <Key value="3√"   display={<span><sup>3</sup>√x</span>} onPress={ this.onPress }  />
          <Key value="y√x"  display={<span><sup>y</sup>√x</span>} onPress={ this.onPress }  />
          <Key value="ln"    display="ln" onPress={ this.onPress }  />
          <Key value="log10" display={<span>log<sub>10</sub></span>} onPress={ this.onPress }  />
          <Key value="4" onPress={ this.onPress } classes="num" />
          <Key value="5" onPress={ this.onPress } classes="num" />
          <Key value="6" onPress={ this.onPress } classes="num" />
          <Key value="−" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="x!" onPress={ this.onPress } classes="left" />
          <Key value="sin" onPress={ this.onPress }  />
          <Key value="cos" onPress={ this.onPress }  />
          <Key value="tan" onPress={ this.onPress }  />
          <Key value="e" onPress={ this.onPress }  />
          <Key value="" onPress={ this.onPress }  />
          <Key value="1" onPress={ this.onPress } classes="num" />
          <Key value="2" onPress={ this.onPress } classes="num" />
          <Key value="3" onPress={ this.onPress } classes="num" />
          <Key value="+" onPress={ this.onPress } classes="orange"/>
        </tr>
        <tr>
          <Key value="" onPress={ this.onPress } classes="left" />
          <Key value="" onPress={ this.onPress }  />
          <Key value="" onPress={ this.onPress }  />
          <Key value="" onPress={ this.onPress }  />
          <Key value="Pi" onPress={ this.onPress }  />
          <Key value="Rnd" onPress={ this.onPress }  />
          <Key value="0" onPress={ this.onPress } classes="num" span="2" />
          <Key value="." onPress={ this.onPress } classes="num" />
          <Key value="=" onPress={ this.onPress } classes="orange"/>
        </tr>
      </tbody>
    );
  }

  render() {
    if(this.props.type === "scientific"){
      return this.scientific();
    }else {
      return this.basic();
    }
  }
}

export default Keypad;
