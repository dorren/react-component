import React from 'react';


var WithSrc = function(props){
  return (
    <div className="DemoBox">
      <div className="demo">
        { props.code }
      </div>

      <pre><code className="html">
        { props.src }
      </code></pre>
    </div>

  )
}

export default WithSrc;
