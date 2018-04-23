import React, { Component } from 'react';
import '../styles/App.css';
import HeaderContent from './HeaderContent';
import CitizensSearcher from './CitizensSearcher';
import CitizensContent from './CitizensContent';
import FooterContent from './FooterContent';
const httpRequest = require('superagent');

/*
 * App : This component holds the main functionality.
 *       It renders the root component, retrive the data for processing
 *       an keeps the methods that covers all the features and inject all of them 
 *       in the corresponding subcomponents.
 */
class App extends Component {
  
  /**
   * constructor : initialize the app state sets some constants an register the methods.
   */ 
  constructor(props) {
    super(props);
    this.state = {
                  "Brastlewark": []
                 }//state
                 
    var keys = Object.keys( this.state );
    this.townName = keys[0];
    this.ItemNotFound = -1;
    this.urlDataProvider = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
        
    this.searchByName = this.searchByName.bind(this);
    this.searchByAge = this.searchByAge.bind(this);
    this.searchByWeight = this.searchByWeight.bind(this);
    this.searchByHeight = this.searchByHeight.bind(this);
    this.searchByHairColor = this.searchByHairColor.bind(this);
    this.searchByProfessions = this.searchByProfessions.bind(this);
    this.findFriendIdByName = this.findFriendIdByName.bind(this);
  }//Constructor               
  
  /*
   * componentDidMount : When the render is done then is the moment to retrieve 
   *                     the data from external resource and set its in the state.
   */
  componentDidMount() {
    const that = this;
    httpRequest.get( this.urlDataProvider )
               .end((err, res) => {
                    if(!err) {
                      var data = JSON.parse(res.text);
                      that.setState(data);
                    }
               });
    
  }
  
  /**
   * SearchByName : given a name attribute (composed by a name and surname), this method tries to search it in the data store.
   *                If the full name is not matched then tries to find it by the first or surname text.
   * param nameToSearch : the full text name and surname separated by a space to search
   * return itemId : the id of the first item found or item_not_found in other case.
   */ 
  searchByName( nameToSearch ) {
      let itemId = this.ItemNotFound;
      let list = this.state[this.townName];
      let nameToSearchLowerCase = nameToSearch.toLocaleLowerCase();
      let nameToSearchSplit = nameToSearchLowerCase.split(' ');
      let name0ToSearch = nameToSearchSplit[0];
      let name1ToSearch = nameToSearchSplit[1];
      
      
      for( let indx=0; indx<list.length; ++indx ) {
        let name = list[indx].name.toString().toLocaleLowerCase();
        let nameSplit= name.split(' ');
        let name0 = nameSplit[0];
        let name1 = nameSplit[1];
        
        if( name0ToSearch && name1ToSearch && nameToSearchLowerCase === name ) {
          itemId = list[indx].id;
          break;
        } else
        if( !name1ToSearch && name0ToSearch && (name0 === name0ToSearch || name1 === name0ToSearch) ) {
          itemId = list[indx].id;
          break;
        }
      }
      console.log('searchByName :',itemId);
      
   return itemId;
  };
  
  /**
   * searchByAge : given a age attribute, this method tries to search it in the data store.
   * param ageToSearch : the value to search
   * return itemId : the id of the first item found or item_not_found in other case.
   */   
  searchByAge( ageToSearch ) {
      let itemId = this.ItemNotFound;
      let list = this.state[this.townName];
      
      for( let indx=0; indx<list.length; ++indx ) {
        if( list[indx].age.toString() === ageToSearch ) {
          itemId = list[indx].id;
          break;
        }
      }
      console.log('searchByAge :',itemId);
      
   return itemId;
  }
   
  /**
   * searchByWeight : given a weight attribute, this method tries to search it in the data store.
   * param weightToSearch : the value to search
   * return itemId : the id of the first item found or item_not_found in other case.
   */    
  searchByWeight( weightToSearch ) {
      let itemId = this.ItemNotFound;
      let list = this.state[this.townName];
      
      for( let indx=0; indx<list.length; ++indx ) {
        if( list[indx].weight.toString() === weightToSearch ) {
          itemId = list[indx].id;
          break;
        }
      }
      console.log('searchByWeight :',itemId);

   return itemId;
  }
    
  /**
   * searchByHeight : given a height attribute, this method tries to search it in the data store.
   * param heightToSearch : the height value to search
   * return itemId : the id of the first item found or item_not_found in other case.
   */       
  searchByHeight( heightToSearch ) {
      let itemId = this.ItemNotFound;
      let list = this.state[this.townName];
      
      for( let indx=0; indx<list.length; ++indx ) {
        if( list[indx].height.toString() === heightToSearch ) {
          itemId = list[indx].id;
          break;
        }
      }
      console.log('searchByHeight :',itemId);

   return itemId;
  }
    
  /**
   * searchByHairColor : given a hair color attribute, this method tries to search it in the data store.
   * param hairColorToSearch : the value to search
   * return itemId : the id of the first item found or item_not_found in other case.
   */     
  searchByHairColor( hairColorToSearch ) {
      let itemId = this.ItemNotFound;
      let list = this.state[this.townName];
      
      for( let indx=0; indx<list.length; ++indx ) {
        if( list[indx].hair_color.toLowerCase() === hairColorToSearch.toLowerCase() ) {
          itemId = list[indx].id;
          break;
        }
      }
      console.log('searchByHairColor :',itemId);

   return itemId;
  }
    
  /**
   * searchByProfessions : given an array of professions , this method tries to search it in the data store.
   * param professionSearch : the array of values to search
   * return itemId : the id of the first item found or item_not_found in other case.
   */       
  searchByProfessions( professionSearch ) {
      let itemId = this.ItemNotFound;
      let list = this.state[this.townName];
      
      
      for( let indx=0; indx<list.length; ++indx ) {
        for( let indxProf=0; indxProf<list[indx].professions.length; ++indxProf  ) {
          if( list[indx].professions[indxProf].toLowerCase() === professionSearch.toLowerCase() ) {
            itemId = list[indx].id;
            break;
          }          
        }
      }
      console.log('searchByProfessions :',itemId);

   return itemId;
  }
  
  /**
   * findFriendIdByName : given a name attribute (full name) , this method tries to search it in the data store.
   * param nameToSearch : the value to search
   * return itemId : the id of the first item found or item_not_found in other case.
   */ 
  findFriendIdByName( nameToSearch ) {
      let friendId = this.ItemNotFound;
      let list = this.state[this.townName];
      
      for( let indx=0; indx<list.length; ++indx ) {
        if( list[indx].name === nameToSearch ) {
          friendId = list[indx].id;
          break;
        }
      }
   return friendId;
  }
  
  
  render() {
    return (
      <div className="App">
        <HeaderContent townName={this.townName} />
                      
        <CitizensSearcher searchByName={this.searchByName}
                          searchByAge={this.searchByAge}
                          searchByWeight={this.searchByWeight}
                          searchByHeight={this.searchByHeight}
                          searchByHairColor={this.searchByHairColor}
                          searchByProfessions={this.searchByProfessions} 
                          ItemNotFound={this.ItemNotFound} />
                          
        <CitizensContent citizens={this.state[this.townName]} 
                         findFriendIdByName={this.findFriendIdByName}  />
                         
        <FooterContent />               
      </div>
    );
  }//render
}

export default App;
