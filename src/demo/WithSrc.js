import React from 'react';
import pretty from 'pretty';
import hljs from 'highlightjs';
import  'highlightjs/styles/github.css';

/**
 * shows actual working component and its source.
 */
class WithSrc extends React.Component {
  componentDidMount() {
    //hljs.initHighlightingOnLoad();
    hljs.highlightBlock(this.srcDom);
  }

  render() {
    return (
      <div className="DemoBox">
        <div className="demo">
          { this.props.code }
        </div>

        <pre ref={(dom) => { this.srcDom = dom; }}>
          <code className="html">
            { this.props.src }
          </code>
        </pre>
      </div>
    )
  }

  static createDemo(code, str){
    let src = pretty(str);

    return (<WithSrc code={code}  src={src} />);
  }
}

export default WithSrc;
