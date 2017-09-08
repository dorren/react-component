import React from 'react';
import WithSrc from './WithSrc';
import RedDot from '../components/red_dot';

var styles = {
  RoundedCorner: {
    border: "2px solid #CCC",
    borderRadius: 5,
    padding: 5,
    width: "auto",
    display: "inline-block"
  }
}

class Widget extends React.Component {
  constructor(props){
    super(props);
    let n = props.count || 0;
    this.state = {count: n};
  }

  getMessage(n) {
    if(n === 0){
      return "No new message."
    }else if (n === 1){
      return "1 new message."
    }else{
      return `${n} new messages.`
    }
  }

  onRead = evt => {
    this.setState({count: 0});
  }

  render() {
    let body = (<div style={ styles.RoundedCorner }
                    onClick={ this.onRead }>
                  { this.getMessage(this.state.count) }
                </div>);
    return (
      <RedDot count={ this.state.count } showCount={this.props.showCount}>
        { body }
      </RedDot>
    );
  }
}

var DemoRedDot = function(props){
  let demo = WithSrc.createDemo((<Widget />), `<Widget />`);

  let demo2 = WithSrc.createDemo(
               (<Widget count={2} />), `<Widget count={2} />`);

   let src3 = `
     /**
      *   <Widget count={3} showCount={true} />
      */
     class Widget extends React.Component {
       /* ... brevify ... */

       onRead = evt => {
         this.setState({count: 0});
       }

       render() {
         let body = (<div style={ styles.RoundedCorner }
                          onClick={ this.onRead }>
                       { this.getMessage(this.state.count) }
                     </div>);
         return (
           <RedDot count={ this.state.count } showCount={this.props.showCount}>
             { body }
           </RedDot>
         );
       }
   `;
   let demo3 = WithSrc.createDemo(
                (<Widget count={3} showCount={true} />),
                src3, "javascript", false);
  return (
    <div>
      <div className="desc">
         RedDot is used to decorate other React Components.
         Try clicking on the components.
      </div>
      { demo  }
      { demo2 }
      { demo3 }
    </div>);
}

export default DemoRedDot;
