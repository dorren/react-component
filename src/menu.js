import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
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
      if(name === 'Home'){
        return (<div className="link" key={i}>
                 <Link to='/' onlyActiveOnIndex activeClassName="active">{name}</Link>
               </div>);
      }else{
        return (<div className="link" key={i}>
                 <NavLink to={`/demo/${name}`} activeClassName="active">{name}</NavLink>
               </div>);
      }
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
