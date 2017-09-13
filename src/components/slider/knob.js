import ReactDOM from 'react-dom';
import React from 'react';
import Draggable from 'react-draggable';

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
        <div className="Knob" />
      </Draggable>
    );
  }
}

export default Knob;
