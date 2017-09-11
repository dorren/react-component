import React from 'react';
import './demos.css';

class Hamburger extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false };
  }

  toggle = ()=>{
    this.setState({open: !this.state.open});
    this.props.onClick(this.state.open);
  }

  render(){
    return (
      <div id="hamburger"
        onClick={this.toggle}>☰</div>
    );
  }
}

export default Hamburger;
