import React from 'react';
import WithSrc from './WithSrc';
import ProgressBar from '../components/progress_bar';

var DemoProgressBar = function(props){
  let code = (<ProgressBar percent={38} />);
  let src = `<ProgressBar percent={38} />`;
  let demo = WithSrc.createDemo(code, src);

  let code2 = (<ProgressBar percent={38} color="red" />);
  let src2 = `<ProgressBar percent={38} color="red" />`;
  let demo2 = WithSrc.createDemo(code2, src2);

  return (
    <div>
      { demo  }
      { demo2 }
    </div>
  );
}

export default DemoProgressBar;
