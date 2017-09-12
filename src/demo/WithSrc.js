import React from 'react';
import pretty from 'pretty';

import 'prismjs';
//import 'prismjs/themes/prism.css';
//import 'prism-themes/themes/prism-ghcolors.css';
import './prism-dracula.css';
import {PrismCode} from "react-prism";

/**
 * shows actual working component and its source.
 */
class WithSrc extends React.Component {
  render() {
    let lang = this.props.lang;
    if(this.props.lang === "html")
      lang = "markup";

    return (
      <div className="DemoBox">
        <div className="demo">
          { this.props.code }
        </div>

        <PrismCode component="pre" className={`language-${lang}`}>
          { this.props.src }
        </PrismCode>
      </div>
    )
  }

  static createDemo(code, str, lang="html", prettify=true){
    let src = prettify ? pretty(str) : str;

    return (<WithSrc code={code}  src={src} lang={lang} />);
  }
}

export default WithSrc;
