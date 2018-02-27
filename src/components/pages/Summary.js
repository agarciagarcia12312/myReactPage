import React from 'react';
import myImg from '../../images/me2.JPG';
import info from '../../helpers/static.js';
import {TweenMax, Power2, TimelineLite} from "gsap";

export default class Summary extends React.Component{
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.6, {y: 500, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -400, opacity: 0, onComplete: callback});
  }
  render(){
    return(
      <div ref={c => this.container = c} className='summary'>
        <h2 className='sectionHeader'>About Me</h2>
        <div className='col-sm-6 halfPage'>
          <img src={myImg} id='summaryPic' alt='My pic'/>
        </div>
        <div className='col-sm-6 halfPage' id='aboutMe'>
            <p>
              <strong className='green'>About me: </strong>{info.summary.about}
            </p>
            <p>
              <strong className='green'>Experienced in: </strong>{info.summary.experience}
            </p>
        </div>
      </div>
    );
  }
}
