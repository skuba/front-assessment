import React, { Component } from 'react';
import '../styles/App.css';
import CitizensList from './CitizensList';

/*
 * CitizensContent : Renders the Citizens content component calling to
 *                   CitizensList component.
 */
class CitizensContent extends Component {

  render() {
    return (
      <div>
        <CitizensList  citizens={this.props.citizens} findFriendIdByName={this.props.findFriendIdByName} />
      </div>
    );
  }//render
}

export default CitizensContent;
