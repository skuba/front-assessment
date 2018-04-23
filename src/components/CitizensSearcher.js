import React, { Component } from 'react';
import '../styles/App.css';


/*
 * CitizensSearcher : Renders the search section page width the text and styles.
 *                    Holds all the searching features.
 * Params ItemNotFound : Integer that holds a not found value used to make some checks.
 * Params searchByName : Injected function that returns the first item matched by name
 * Params searchByAge  : Injected function thar returns the first item matched by age
 * Params searchByWeight : Injected function that returns the first item matched by weight
 * Params searchByHeight : Injected function that returns the first item matched by height
 * Params searchByHairColor : Injected function that returns the first item matched by Hair Color
 * Params searchByProfessions : Injected function that returns the first item matched by professions
 */
class CitizensSearcher extends Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  /**
   * doSearch : It makes the search chain for the main item's attributes
   *            calling to the corresponding method.
   *            The '#' value is setted to clear the navigation history
   *            in the begining of the method or when the item is not found.
   */ 
  doSearch( searchItem ) {
    let itemId= this.props.ItemNotFound
    
    window.location.hash='#'; // hashy clear
    if( this.props.ItemNotFound === (itemId= this.props.searchByName( searchItem )) ) {
      if( this.props.ItemNotFound === (itemId= this.props.searchByAge(searchItem  )) ) {
        if( this.props.ItemNotFound === (itemId= this.props.searchByWeight( searchItem )) ) {
          if( this.props.ItemNotFound === (itemId= this.props.searchByHeight( searchItem )) ) {
            if( this.props.ItemNotFound === (itemId= this.props.searchByHairColor( searchItem )) ) {
              if( this.props.ItemNotFound === (itemId= this.props.searchByProfessions( searchItem )) ) {
                window.location.hash='#';
              } else {  window.location.hash= itemId;  }
            } else {  window.location.hash= itemId;  }
          } else {  window.location.hash= itemId;  }
        } else {  window.location.hash= itemId;  }        
      } else {  window.location.hash= itemId;  }
    } else {  window.location.hash= itemId;  }

  }//doSearch

  /**
   * searchHandler : Executed when user hits a key in the search box
   *                 When the key pressed is Enter then the search is performed
   */ 
  searchHandler( event ) {
    const IntrokeyValue = "Enter"; 
    
    if( event.key===IntrokeyValue ) {
      this.doSearch(event.target.value.trim());
    }
  }
  
  /**
   * clickHandler : Executed when the input search is clicked,
   *                then the content is removed
   */ 
  clickHandler(event) {
    event.target.value='';
  }

  render() {
    return (
      <div className="App-finder">
        If you need to find someone write one of its attributes <input placeholder="write something here ..." 
                                                                       onKeyPress={this.searchHandler} 
                                                                       onClick={this.clickHandler}  />
      </div>
    );
  }//render
}

export default CitizensSearcher;
