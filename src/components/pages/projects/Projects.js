import React from 'react';
import staticInfo from '../../../helpers/static.js';
import DisplayProject from './DisplayProject.js';
import ProjectRender from './ProjectRender.js';
import TransitionGroup from 'react-addons-transition-group';
import {TweenMax, Power2, TimelineLite} from "gsap";

export default class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state ={projectArray:[""],project:'',show:false};
    this.componentWillMount= this.componentWillMount.bind(this);
    this.showProject= this.showProject.bind(this);
    this.close= this.close.bind(this);
  }
  componentWillMount(){
    let projects = staticInfo.projects;
    this.setState({projectArray:projects});
  }
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 1.5, {y: 500, opacity: .2}, {y: 0, opacity: 1, onComplete: callback});
  }

  // componentWillLeave (callback) {
  //   const el = this.container;
  //   TweenMax.fromTo(el, 0.2, {y: 0, opacity: 1}, {y: -400, opacity: 0, onComplete: callback});
  // }
  showProject(project){
    // ev.preventDefault();
    // console.log(project)
    this.setState({project:project,show:true})
  }
  close(){
    this.setState({project:'',show:false})
  }
  render(){
    return(
      <div ref={c => this.container = c} className='summary'>
        {/* <h2 className='sectionHeader'>Projects</h2> */}
        {!this.state.show &&
          <h2 className='sectionHeader' id='pTittle'>Projects</h2>
        }
        <TransitionGroup>
          {this.state.show ?
            <DisplayProject project={this.state.project} close={this.close}/>
            :
            <div >
              {/* <div className='clearBoth'/> */}
              {/* <br/> */}
              {/* <h2 className='sectionHeader'>Projects</h2> */}
              {this.state.projectArray.map(function(search,i) {
                return (
                  <ProjectRender key={i} showProject={this.showProject}  project={search} />
                );
              }, this)}
            </div>
          }
        </TransitionGroup>
      </div>
    );
  }
}
