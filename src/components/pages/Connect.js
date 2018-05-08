import React from 'react';
import myImg from '../../images/me3.JPG';
import staticInfo from '../../helpers/static.js'
import {TweenMax, Power2, TimelineLite} from "gsap";

export default class Connect extends React.Component{
  constructor(props) {
    super(props);
    this.state ={linkArray:[""]}
  }
  componentWillMount(){
    let links = staticInfo.contactLinks;
    this.setState({linkArray:links});
  }
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 1.2, {y: 500, opacity: .3}, {y: 0, opacity: 1, onComplete: callback});
  }

  // componentWillLeave (callback) {
  //   const el = this.container;
  //   TweenMax.fromTo(el, 0.2, {y: 0, opacity: 1}, {y: -400, opacity: 0, onComplete: callback});
  // }
  render(){
    return(
      <div ref={c => this.container = c} className='summary'>
        <h2 className='sectionHeader'>Connect </h2>
        <div className='col-sm-6 halfPage'>
          <img src={myImg} id='connectPic' alt='My pic'/>
        </div>
        <div className='col-sm-6 halfPage'>
          {this.state.linkArray.map(function(search,i) {
            return (
              <div key={i} className='Clinks'>
                <a href={search.link}>
                <img src={search.img} alt={search.name} className='connectImgs'/>
                  <strong>  {search.description} </strong>
                </a>
                <br/>
              </div>
            );
          })}
        </div>
        <br/>
        <br/><br/>
      </div>
    );
  }
}
