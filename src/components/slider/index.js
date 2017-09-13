import ReactDOM from 'react-dom';
import React from 'react';
import Knob from './knob';
import './slider.css';

class Ruler extends React.Component {
  render() {
    return (
      <div className="Ruler">
        <div className="Bar"/>
      </div>
    );
  }
}

class Slider extends React.Component {
  constructor(props){
    super(props);
    this.width = 20;  // prevent undefined error, will be overwritten later.
    this.knobWidth = 20;
    this.state ={index: 0};
  }
  componentDidMount(){
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.width = rect.width;
    this.knob.setBounds(rect);
    this.forceUpdate();
  }

  onDrag = (pos)=>{
    this.setState({index: pos});

    if(this.props.onChange)
      this.props.onChange(pos);
  }

  render() {
    let arr = this.props.choices;
    let labelWidth = (this.width - this.knobWidth) / (arr.length-1);

    let labels = arr.map((x,i) => {
      let classes = "rulerNum";
      if(i === this.state.index)
        classes += " active";

      let css = {left: labelWidth * i};
      if(i === arr.length-1)
        css = {right: 0};

      return (<span key={i} style={css} className={classes} >
                {x}
              </span>);
    });

    return (
      <div className="Slider">
        <div className="ui">
          <Ruler />
          <Knob
            ref={(elem) => { this.knob = elem; }}
            choices={ this.props.choices }
            onDrag= { this.onDrag }/>
        </div>
        <div className="labels">
            { labels }
        </div>
      </div>
    );
  }
}

export default Slider;
