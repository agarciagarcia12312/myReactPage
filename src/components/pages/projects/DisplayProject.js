import React from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

export default class DisplayProject extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 1.0, { width:'0%', opacity: 0}, {width:'100%', opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 1.0, {y: 0,opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
  }
  render(){
    return(
      <div ref={c => this.container = c}>
        <div id='projectPage'/>
        <div className='summary'>
          <a href={this.props.project.projectLink} target="_blank">
            <div className='sectionHeader' id='pTittleLink'>{this.props.project.name}</div>
          </a>
          <div className='col-sm-6 halfPage'>
            <img src={this.props.project.img} id='mainProjectImg' alt='Project image'/>
          </div>
          <div className='col-sm-6 halfPage'>
            <p className='Psection text-left'>
              <strong className='green'>Project description:</strong>
              {this.props.project.description}
            </p>
            <p className='Psection text-left'>
              <strong className='green'>Stack:</strong>
              {this.props.project.stack}
            </p>
            <p className='Psection'>
              <a href={this.props.project.projectLink} target="_blank">
                <span className='linkName'>Project Link</span>
              </a>
            </p>
            {this.props.project.codeLink !=='' &&
              <p className='Psection'>
                <a href={this.props.project.codeLink} target="_blank">
                  <span className='linkName'>Link to code</span>
                </a>
              </p>
            }

          </div>
        </div>
        <div className='clearBoth'/>
        {/* white background, project image ion left tittle on top descrioption on right */}
      </div>
    );
  }
}
