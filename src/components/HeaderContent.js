import React, { Component } from 'react';
import '../styles/App.css';

/*
 * HeaderContent : Renders the header's section page width the text and styles.
 * params townName : the name to show on the Header
 */
class HeaderContent extends Component {

  render() {
    return (
      <div className="App-header">
        <div className="App-title">Welcome to The {this.props.townName} Online Book!</div>
        <div className="App-title">(Old fashion text style ;P)</div>
        
      </div>
    );
  }//render
}

export default HeaderContent;
