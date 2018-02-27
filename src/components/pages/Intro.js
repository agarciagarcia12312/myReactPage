import React from 'react';
import background from '../../images/milkyWay.jpg';
import logo from '../../logo.svg';
import Style from  './style.css';
import {TweenMax, Power2, TimelineLite} from "gsap";
import TransitionGroup from 'react-addons-transition-group';


class Tittle extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -150, opacity: 0, onComplete: callback});
  }
  render () {
    return <div className="tittle" ref={c => this.container = c}>A.G Codes</div>;
  }
}

export default class Intro extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tittle:false
    }
    this.componentWillMount= this.componentWillMount.bind(this);
  }

  componentWillMount(){
    const el = this.container;
    setTimeout(function(){ this.setState({tittle:true});
    // TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: 'callback'});
   }.bind(this), 500);
    setTimeout(function(){ this.setState({tittle:false}) }.bind(this), 1500);
  }
  render(){
    return(
      <div className={Style}>
        <div id='greetingBackground' style = {{backgroundImage: 'url(' + background + ')'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <TransitionGroup>
            {this.state.tittle && <Tittle/> }
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
