import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business, // you could think of these as 'someBiz'
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
  searchYelp(term, location, sortBy){
    console.log("Searching Yelp with " + term + location + sortBy +
    " as the 3 parameters");
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {/* This is adding an attribute named 'businesses', and setting it equal
        to the array named businesses. */}
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
