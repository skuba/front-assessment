import React, { Component } from 'react';
import '../styles/App.css';

/*
 * CitizensItem : Renders the Citizens info.
 *                Every CitizenItem when is rendered puts 
 *                a little description about it self.
 *                The messages for some attributes are generated randomly.
 * params dataItem : The info of the item (Citizen)  
 * params findFriendIdByName : Injected method that given a name returns its id if the item is found.    
 */
class CitizensItem extends Component {
  /**
   * getRandomInt: Returns a random integer between min (inclusive) and max (inclusive)
  */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * getGreeting : Returns a choosed greeting message from an array of possibilities.
   */ 
  getGreeting() {
    const list = ['Hi!','Heeey', 'Hi there!', 'WhatsUp!!!'];
    let index =  this.getRandomInt( 0, list.length-1 );
    return list[index];  
  }
 
  /**
   * prefixName : Returns a choosed message from an array of possibilities.
   */ 
  prefixName() {
    const list = ['my name is','call me', 'you can call me as', 'I am known as'];
    let index =  this.getRandomInt( 0, list.length-1 );
   return list[index];  
  }
  
  /**
   * prefixProfessions : Returns a choosed message from an array of possibilities.
   */ 
  prefixProfessions() {
    const list = ['I can spent my time as','I m good as','I have experience as', 'I am skilled as', 'My professions are'];
    let index =  this.getRandomInt( 0, list.length-1 );
   return list[index];    
  }
  
  /**
   * getProfessions : Returns a text that contains all the professions of the item (Citizen) 
   */ 
  getProfessions() {
    let text = "";
    
    for(let indx=0; indx< this.props.dataItem.professions.length; ++indx) {
      if(indx!==0) text +=",";
      text  += this.props.dataItem.professions[indx];
    }

    return text;
  }

  /**
   * prefixFriends : Returns a choosed message from an array of possibilities.
   */ 
  prefixFriends() {
    let text = "";
    if(this.props.dataItem.friends.length === 0) {
      const prefixNoFriendslist = ['I have no friends.','Better without friends.', 'No friends no problems'];
      let index =  this.getRandomInt( 0, prefixNoFriendslist.length-1 );
      text = prefixNoFriendslist[index];
    } else {
      const prefixFriendslist = ['My best friends are','Here some of my colleagues','My colleagues', 'I introduce you to my squad', 'Here my friends', 'My dear friends'];
      let index =  this.getRandomInt( 0, prefixFriendslist.length-1 );
      text = prefixFriendslist[index];
    }
    
   return text;    
  }

  /**
   * getFriends :Returns a generated code that contains all the professions of the item (Citizen) .
   */
  getFriends() {
    
    const listItems = this.props.dataItem.friends.map( (item, key) => {
                                                          // Here we have the full name of the friend just text not ids..
                                                          // then we need a function that given a full name then returns the corresponding id.
                                                          // this id is used in the href.. of the HTML..
                                                          // its no so efficient but is needed to implement the navigation system.
                                                          let friendIdAnchorHref = this.props.findFriendIdByName(item);
                                                          friendIdAnchorHref = '#'+friendIdAnchorHref;
                                                          return(
                                                            <a key={key}
                                                               href={friendIdAnchorHref} >
                                                             {item}
                                                            </a>
                                                          );  
                                                        }
                                                     );
                                             
    return (
      listItems
    );
  }//getFriends

  
  render() {
    return (
      <div className="App-item" id={this.props.dataItem.id}>
       {this.getGreeting()}, {this.prefixName()} <a id={this.props.dataItem.name}>{this.props.dataItem.name}</a>.
       I am {this.props.dataItem.age} years old.
       My weight and height are {this.props.dataItem.weight} /  {this.props.dataItem.height}.
       My hair is {this.props.dataItem.hair_color}.
       {this.prefixProfessions()}:  {this.getProfessions()}. 
       {this.prefixFriends()} {this.getFriends()}
      </div>
    );
  }//render
}

export default CitizensItem;
