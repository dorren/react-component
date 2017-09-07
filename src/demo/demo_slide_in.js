import React from 'react';
import WithSrc from './WithSrc';
import SlideIn from '../components/slide_in';

var DemoFadeIn = function(props){
  let code = (<SlideIn>
                <p>Sliding text without param</p>
              </SlideIn>);

  let src = `<SlideIn>
               <p>Sliding text without param</p>
             </SlideIn>`;
  let demo = WithSrc.createDemo(code, src);


  let code2 = (<SlideIn duration={3}>
                 <p>Sliding text with 3s duration</p>
               </SlideIn>);

  let src2 = `<SlideIn duration={3}>
                <p>Sliding text with 3s duration</p>
              </SlideIn>`;
  let demo2 = WithSrc.createDemo(code2, src2);

  return (
    <div>
      { demo  }
      { demo2 }
    </div>);
}

export default DemoFadeIn;
