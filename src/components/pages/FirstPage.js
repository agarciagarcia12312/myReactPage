import React from 'react';
import Style from  './style.css';
import background from '../../images/tlaxcala.jpg';

export default class FirstPage extends React.Component{
  render(){
    return(
      <div className={Style}>
        <div id='firstPage' style = {{backgroundImage: 'url(' + background + ')'}}>
          <p id='joke' onClick={this.props.getJoke}> {this.props.joke}</p>
        </div>
      </div>
    );
  }
}
