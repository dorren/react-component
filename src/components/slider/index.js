import ReactDOM from 'react-dom';
import React from 'react';
import Draggable from 'react-draggable';
import './slider.css';

class Knob extends React.Component {
  constructor(props){
    super(props);
    this.left = 0;
  }

  componentDidMount(){
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.baseLeft = rect.left;
    this.width = rect.right - rect.left;
  }

  setBounds(rect){
    this.bounds = {left: 0, right: rect.width - this.width};
    this.grid = (rect.width - this.width) / (this.props.choices.length-1);
    this.forceUpdate();
  }

  onDragOver = (evt)=>{
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    let pos = Math.round((rect.left - this.baseLeft) / this.grid);
    this.props.onDrag(pos);
  }

  render() {
    return (
      <Draggable
        bounds={this.bounds}

        onStop={this.onDragOver}
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[this.grid, this.grid]}>
        <div className="Knob" >

        </div>
      </Draggable>
    );
  }
}

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
      if(i === arr.length -1)
        css = {right: 0};

      return (<span key={i}
                style={css}
                className={classes} >
                {x}
              </span>);
    });

    return (
      <div className="Slider" style={{width: 500}}>
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
