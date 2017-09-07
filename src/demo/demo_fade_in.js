import React from 'react';
import pretty from 'pretty';
import WithSrc from './WithSrc';
import FadeIn from '../components/fade_in';

var DemoFadeIn = function(props){
  let demos = [];

  let code = ( <FadeIn>
                  <p>Fading text without param</p>
                </FadeIn>
              );

  let src = pretty(`
                <FadeIn>
                  <p>Fading text without param</p>
                </FadeIn>`);
  demos.push(<WithSrc code={code}  src={src} />);


  code = (<FadeIn duration={5}>
            <p>Fading text without param</p>
          </FadeIn>
         );

  src = pretty(`
                <FadeIn duration={5}>
                  <p>Fading text without param</p>
                </FadeIn>`);
  demos.push(<WithSrc code={code}  src={src} />);

  return (<div>{ demos }</div>);
}

export default DemoFadeIn;
