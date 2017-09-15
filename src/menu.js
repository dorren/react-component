import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Hamburger from './demo/hamburger';
import './App.css';
import logoSvg from './logo.svg';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menuOpen: true};
  }

  logo() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }

  toggleMenu = (open)=> {
    this.setState({menuOpen: open});
  }

  render() {
    let names = ["Home", "FadeIn", "SlideIn", "Carousel", "ProgressBar",
                 "Slider", "RedDot", "Calculator"];

    let links = names.map( (name, i) => {
      let path = name === 'Home' ? '/' : `/demo/${name}`;

      return (<div className="link" key={i}>
               <Link to={path}>{name}</Link>
             </div>);
     });

    let menuCss = this.state.menuOpen ? "open" : "close";

    return (
      <div className={`Menu ${menuCss}`}>
        <Hamburger onClick={ this.toggleMenu }/>
        { this.logo() }
        <div className="links"> { links } </div>
      </div>
    );
  }
}

export default withRouter(Menu);
