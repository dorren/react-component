import React from 'react';
import WithSrc from './WithSrc';
import FadeIn from '../components/fade_in';

var DemoFadeIn = function(props){
  let code = (<FadeIn>
                <p>Fading text without param</p>
              </FadeIn>);

  let src = `<FadeIn>
               <p>Fading text without param</p>
             </FadeIn>`;
  let demo = WithSrc.createDemo(code, src);


  let code2 = (<FadeIn duration={5}>
                 <p>Fading text with 5s duration</p>
               </FadeIn>);

  let src2 = `<FadeIn duration={5}>
                <p>Fading text with 5s duration</p>
              </FadeIn>`;
  let demo2 = WithSrc.createDemo(code2, src2);

  return (
    <div>
      { demo  }
      { demo2 }
    </div>);
}

export default DemoFadeIn;
