import React from 'react';

export default class Sidebar extends React.Component{
  constructor(props) {
    super(props);
    this.state ={}
    this.navHome = this.navHome.bind(this);
    this.navAbout = this.navAbout.bind(this);
    this.navProjects = this.navProjects.bind(this);
    this.navConnect = this.navConnect.bind(this);
  }

  navHome(){
    this.props.displayPage('p1');
    this.props.close();

  }
  navAbout(){
    this.props.displayPage('connect')
    this.props.close();

  }
  navProjects(){
    this.props.displayPage('services')
    this.props.close();
  }
  navConnect(){
    this.props.displayPage('quote')
    this.props.close();

  }

  render(){
    return(
      <div className='sideNav'>
        <span className=' xBtn' onClick={this.props.close} >X</span>
        <div className='input-group'>
          <span className="input-group-addon sideLink"><i className="fa fa-home"></i></span>
          <p className='sideName' onClick={this.navHome}> Home</p>
        </div>
        <div className='input-group'>
          <span className="input-group-addon sideLink"><i className="fa fa-wrench"></i></span>
          <p className='sideName' onClick={this.navProjects}> Services</p>
        </div>
        <div className='input-group'>
          <span className="input-group-addon sideLink"><i className="fa fa-question-circle"></i></span>
          <p className='sideName' onClick={this.navAbout}> About</p>
        </div><br/><br/><div className='longBreak'/>
        <button  className='getQuoteBtn' onClick={this.navConnect}>Get Quote</button>
        <button  className="cancelBtn " onClick={this.props.close}>Cancel</button><br/>
        <div className='input-group'>
          <span className="input-group-addon smallSideLink"><i className="fa fa-phone"></i></span>
          <small className='smallName blue' onClick={this.navProjects}>(970)-440-7360</small>
        </div>
        <div className='input-group'>
          <span className="input-group-addon smallSideLink"><i className="fa fa-building"></i></span><br/>
          <small className='smallName' onClick={this.navProjects}> 17455 Lipan st.<br/>Denver, Colorado </small>
        </div>
      </div>
    );
  }
}
