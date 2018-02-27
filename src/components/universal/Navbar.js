import React from 'react';
import staticInfo from '../../helpers/static.js';
import tlax from '../../images/tlaxcala.jpg';
import wall from '../../images/wall1.jpg';
import menuLogo from '../../images/menuLogo.png';
import './style.css';


export default class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state ={linkArray:[""]}
    this.navHome = this.navHome.bind(this);
    this.navAbout = this.navAbout.bind(this);
    this.navProjects = this.navProjects.bind(this);
    this.navConnect = this.navConnect.bind(this);
  }

  componentWillMount(){
    let links = staticInfo.contactLinks;
    this.setState({linkArray:links});
  }

  navHome(){
    this.props.displayPage('p1')
  }
  navAbout(){
    this.props.displayPage('summary')
  }
  navProjects(){
    this.props.displayPage('projects')
  }
  navConnect(){
    this.props.displayPage('connect')
  }
  render(){
    return(
      <div>
        {this.props.currentPage==='p1' ?
        <nav className="navbar fixed-top navbar-toggleable-md " id='nav'>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style = {{backgroundImage: 'url(' + menuLogo + ')'}}></span>
          </button>
          <a className="navbar-brand mb-0" id='name' onClick={this.navHome} >Andy Garcia</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mr-auto linkBackground">
              <li className="nav-item links active">
                <a className="nav-link" onClick={this.navAbout}>About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item links">
                <a className="nav-link" onClick={this.navProjects}>Projects</a>
              </li>
              <li className="nav-item links">
                <a className="nav-link" onClick={this.navConnect}>Connect</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {this.state.linkArray.map(function(search,i) {
                return (
                  <div key={i} className='Nlinks'>
                    <a href={search.link}>
                    <img src={search.img} alt={search.name} className='connectImgs'/>
                    </a>
                  </div>
                );
              })}
            </form>
          </div>
        </nav>
        :
        <nav className="navbar fixed-top navbar-toggleable-md " id='nav2'  style = {{backgroundImage: 'url(' + wall + ')'}}>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" id='menuBtn2' style = {{backgroundImage: 'url(' + menuLogo + ')'}}></span>
          </button>
          <a className="navbar-brand mb-0" id='name2' onClick={this.navHome} >Andy Garcia</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mr-auto" >
              <li className="nav-item links2" >
                <a className="nav-link" onClick={this.navAbout}>About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item links2">
                <a className="nav-link" onClick={this.navProjects}>Projects</a>
              </li>
              <li className="nav-item links2">
                <a className="nav-link" onClick={this.navConnect}>Connect</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {this.state.linkArray.map(function(search,i) {
                return (
                  <div key={i} className='Nlinks'>
                    <a href={search.link}>
                      <img src={search.img} alt={search.name} className='connectImgs'/>
                    </a>
                  </div>
                );
              })}
            </form>
          </div>
        </nav>
      }
      </div>
    );
  }
}
