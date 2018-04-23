import React, { Component } from 'react';
import '../styles/App.css';
import CitizensItem from './CitizenItem';


/*
 * CitizensList : Renders the list that contains the Citizens info.
 *                rendered by the CitizensItem componet.
 */
class CitizensList extends Component {
  
  contentList() {
   
    const listItems = this.props.citizens.map( (item) =>
                                                  <div key={item.id}>
                                                     <CitizensItem dataItem={item} findFriendIdByName={this.props.findFriendIdByName} />
                                                  </div>
                                             );
                                             
    return (
      <div>{listItems}</div>
    );
  }//contentList


  render() {
    return (
      <div>
        {this.contentList()}
      </div>
    );
  }//render
}

export default CitizensList;
