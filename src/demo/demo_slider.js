import React from 'react';
import WithSrc from './WithSrc';
import Slider from '../components/slider';

var handler = (index) =>{
  console.log("slider position is now " + index);
}

var DemoSlider = function(props){
  let code = (<Slider choices={[1,2,3,4,5]}/>);
  let src  = "<Slider choices={[1,2,3,4,5]}/>";
  let demo = WithSrc.createDemo(code, src);

  let code2 = (<Slider
                 choices={["plain", "mild", "spicy", "super"]}
                 onChange={ handler }
              />);
  let src2  = `<Slider
                 choices={["plain", "mild", "spicy", "super"]}
                 onChange={ handler }
              />`;
  let demo2 = WithSrc.createDemo(code2, src2);

  return (
    <div>
      { demo }
      { demo2 }
    </div>);
}

export default DemoSlider;
