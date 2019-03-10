import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import LandingPage from './LandingPage';
import CarDetailsPage from './CarDetailsPage';

class App extends Component {

  constructor() {
    super();

    this.state = {
      locationValues: [],
      dayValues: [],
      showCarDetails: false
    };
  }

  updateSearch = (locationValues, dayValues) => {
    this.setState({
      locationValues,
      dayValues,
      showCarDetails: true
    });
  }

  showLandingPage = () => {
    this.setState({
      locationValues: [],
      dayValues: [],
      showCarDetails: false
    });
  }

  render() {
    const {locationValues, dayValues, showCarDetails} = this.state;
    let currentPage = showCarDetails ? 
      <CarDetailsPage locationValues={locationValues} dayValues={dayValues} showLandingPage={this.showLandingPage}/>
      : <LandingPage updateSearch={this.updateSearch}/>
    return (
      <div className="App">
        <Header />
        {currentPage}
      </div>
    );
  }
}

export default App;
