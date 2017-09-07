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


  let code2 = (<SlideIn duration={3} from="right" delay={3}>
                 <p>Sliding text with params</p>
               </SlideIn>);

  let src2 = `<SlideIn duration={3} from="right" delay={3}>
                <p>Sliding text with params</p>
              </SlideIn>`;
  let demo2 = WithSrc.createDemo(code2, src2);



  let code3 = (<SlideIn duration={3} from="top" delay={6}>
                 <p>Sliding text with params</p>
               </SlideIn>);

  let src3 = `<SlideIn duration={3} from="top" delay={6}>
                <p>Sliding text with params</p>
              </SlideIn>`;
  let demo3 = WithSrc.createDemo(code3, src3);


  let code4 = (<SlideIn duration={3} from="bottom" delay={9}>
                 <p>Sliding text with params</p>
               </SlideIn>);

  let src4 = `<SlideIn duration={3} from="bottom" delay={9}>
                <p>Sliding text with params</p>
              </SlideIn>`;
  let demo4 = WithSrc.createDemo(code4, src4);

  return (
    <div>
      { demo  }
      { demo2 }
      { demo3 }
      { demo4 }
    </div>);
}

export default DemoFadeIn;
