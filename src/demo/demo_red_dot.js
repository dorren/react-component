import React from 'react';
import WithSrc from './WithSrc';
import RedDot from '../components/red_dot';

var styles = {
  RoundedCorner: {
    border: "2px solid #CCC",
    borderRadius: 5,
    padding: 6,
    width: 130,
    display: "inline-block",
  },
  addBtn: {
    float: 'left',
    padding: "3px 10px",
    margin: '10px 20px 5px 0px',
    fontSize:"100%",
    borderRadius: 5,
    background: "#EEE"
  },
  floatWidget: {
    float: "left",
    marginRight: 50
  },
  clear: {
    clear: "both"
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
    this.setState({count: this.state.count + n});
  }

  getMessage(n) {
    if(n === 0){
      return "No message."
    }else if (n === 1){
      return "1 message."
    }else{
      return `${n} messages.`
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
  updateWidget = (n=1)=>{
    this.widget.addCount(n);
  }

  render(){
    let demo = WithSrc.createDemo((<Widget />), `<Widget />`);

    let demo2 = WithSrc.createDemo(
                 (<Widget count={2} />), `<Widget count={2} />`);

     let code3 = (
                  <div>
                    <div style={styles.floatWidget}>
                      <Widget count={3} showCount={true}
                        ref={(elem) => { this.widget = elem; }} />
                    </div>
                    <button style={styles.addBtn} data-
                      onClick={ ()=> this.updateWidget(1) }> add 1 </button>
                    <button style={styles.addBtn}
                      onClick={ ()=> this.updateWidget(20) }> add 20 </button>
                    <div style={styles.clear}/>
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
