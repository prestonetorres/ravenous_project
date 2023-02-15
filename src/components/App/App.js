import React, {Component} from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../util/Yelp';

/**export const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'JoyRide',
  address: 'Valencia Street',
  city: 'San Francisco',
  state: 'CA',
  zipCode: '94103',
  category: 'ITALIAN',
  rating: 4.9,
  reviewCount: 240
};

const businesses = [
      business,
      business,
      business,
      business,
      business,
      business
    ];**/

class App extends Component{
  constructor(props){
    super(props);
    this.state={
        businesses:[]
    };
    this.searchYelp=this.searchYelp.bind(this);
    }
  

  searchYelp(term,location,sortBy){
    Yelp.searchYelp(term,location,sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      })
    });
  }

  render(){
  return (
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar searchYelp={this.searchYelp}/>
    <BusinessList businesses={this.state.businesses}/> 
  </div> 
  )};
}

export default App;