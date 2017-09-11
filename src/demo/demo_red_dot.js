import React from 'react';
import WithSrc from './WithSrc';
import RedDot from '../components/red_dot';

var styles = {
  RoundedCorner: {
    border: "2px solid #CCC",
    borderRadius: 5,
    padding: 5,
    width: 150,
    display: "inline-block"
  },
  addBtn: {
    padding: 3,
    marginLeft:50,
    fontSize:"100%",
    borderRadius: 5,
    background: "#EEE"
  }
}

class Widget extends React.Component {
  constructor(props){
    super(props);
    let n = props.count || 0;
    this.state = {count: n};
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ count: nextProps.count || 0 });
  // }

  addCount(n){
    this.setState({count: this.state.count + 1});
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


class DemoRedDot extends React.Component {
  updateWidget = ()=>{
    this.widget.addCount();
  }

  render(){
    let demo = WithSrc.createDemo((<Widget />), `<Widget />`);

    let demo2 = WithSrc.createDemo(
                 (<Widget count={2} />), `<Widget count={2} />`);

     let code3 = (
                  <div>
                    <Widget count={3} showCount={true}
                      ref={(elem) => { this.widget = elem; }} />
                    <button style={styles.addBtn}
                      onClick={ this.updateWidget }> add </button>
                  </div>);
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
                  code3,
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
}

export default DemoRedDot;
