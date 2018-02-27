import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Fader = ({ children }) => (
  <ReactCSSTransitionGroup
    transitionName='example2'
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={500}
    >
    { children }
  </ReactCSSTransitionGroup>
)
export default class ProjectRender extends React.Component{
  constructor(props) {
    super(props);
    this.state={showTittle:false}
    this.showProject= this.showProject.bind(this);
    this.show= this.show.bind(this);
    this.hide= this.hide.bind(this);
  }
  showProject() {
    let project = this.props.project;
    this.props.showProject(project)
  }
  show(){
    this.setState({showTittle:true})
  }
  hide(){
    this.setState({showTittle:false})
  }
  render(){
    return(
      <div className='col-sm-4 pSection' onMouseEnter={this.show}
        onMouseLeave={this.hide}>
        <div className='projects' style = {{backgroundImage: 'url(' + this.props.project.img + ')'}} onClick={this.showProject}>
          <Fader>
            {this.state.showTittle && <h3 className='pTittle'>{this.props.project.name}</h3>}
          </Fader>


        </div>
      </div>
    );
  }
}
