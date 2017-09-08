import React from 'react';
import pretty from 'pretty';
import hljs from 'highlightjs';
import  'highlightjs/styles/vs.css';

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
          <code className={this.props.lang ? this.props.lang : "html"}>
            { this.props.src }
          </code>
        </pre>
      </div>
    )
  }

  static createDemo(code, str, lang="html", prettify=true){
    let src = prettify ? pretty(str) : str;

    return (<WithSrc code={code}  src={src} lang={lang} />);
  }
}

export default WithSrc;
