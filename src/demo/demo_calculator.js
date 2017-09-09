import React from 'react';
import WithSrc from './WithSrc';
import Calculator from '../components/calculator';

var DemoCalculator = function(props){
  let demo = WithSrc.createDemo(
               (<Calculator />),
               "<Calculator />");

  let demo2 = WithSrc.createDemo(
               (<Calculator type="scientific" />),
               `<Calculator type="scientific" />`);

  return (
    <div>
      { demo  }
      { demo2 }
    </div>);
}

export default DemoCalculator;
