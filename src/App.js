import React, { Component } from 'react';
import request from 'request'
import logo from './logo.svg';
import Intro from './components/pages/Intro.js';
import FirstPage from './components/pages/FirstPage.js';
import Summary from './components/pages/Summary.js';
import Projects from './components/pages/projects/Projects.js';
import Navbar from './components/universal/Navbar.js';
import Connect from './components/pages/Connect.js';
import Sidebar from './components/universal/Sidebar.js';
import TransitionGroup from 'react-addons-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import background from './images/wall1.jpg'
import './App.css';


const Fader = ({ children }) => (
  <ReactCSSTransitionGroup
    transitionName='example'
    transitionEnterTimeout={1000}
    transitionLeaveTimeout={500}
    >
    { children }
  </ReactCSSTransitionGroup>
)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro:true, p1:false,summary:false,projects:false,connect:false,
      joke:'',currentPage:''
    }
    this.getJoke= this.getJoke.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayPage = this.displayPage.bind(this);
    this.componentWillMount= this.componentWillMount.bind(this);
  }
  componentWillMount(){
    this.getJoke();
  setTimeout(function(){ this.setState({intro:false,p1:true,currentPage:'p1'}) }.bind(this), 1800);
  }
  getJoke(){
    request({
      method:"get",
      headers :{
      'Accept': 'application/json',
      },
      url: "https://icanhazdadjoke.com/"
    },function(err,response){
      let res = JSON.parse(response.body);
      this.setState({joke:res.joke})
    }.bind(this))
  }
  displayPage(newPage){
    // hide current page show new page
    let current = this.state.currentPage;
    this.setState({[current]:false, [newPage]:true,currentPage:newPage})
  }
  handleChange(event) {
     const target = event.target;
     var value = target.type === 'checkbox' ? target.checked : target.value;
     const inputName = target.name;
      this.setState({
       [inputName]: value
     });
   }
  render() {
    return (
      <div className="App">
        {!this.state.intro && <Navbar displayPage={this.displayPage} currentPage={this.state.currentPage}/>}

        <Fader>
          {this.state.intro && <Intro/>}
          {this.state.p1 && <FirstPage getJoke={this.getJoke} joke={this.state.joke} displayPage={this.displayPage}/>}
        </Fader>
        <div id='genericPhone' className=''/>
        {/* <div id='generic' className='hideOnPhone' style = {{backgroundImage: 'url(' + background + ')'}}></div> */}
        <TransitionGroup>
          {this.state.summary && <Summary/> }
          {this.state.connect && <Connect/> }
          {this.state.projects && <Projects/> }
        </TransitionGroup>

      </div>
    );
  }
}

export default App;
