import React from 'react';
import WithSrc from './WithSrc';

var DemoWithSrc = function(props){
  let src = `<WithSrc
                code=${alert("hello world.")}
                lang="javascript"
              />`;

  let code = (<WithSrc
                code={`document.write("hello world.");`}
                src= { src }
                lang="javascript"
              />);


  let demo = WithSrc.createDemo(code, src, "javascript");


  return (
    <div>
      { demo  }
    </div>);
}

export default DemoWithSrc;
