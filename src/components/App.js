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


  /**
   * Function to update the state of
   * locationValues, dayValues and showCarDetails
   * such that car details page gets displayed with relevant car details
   * 
   * @memberOf App
   */
  updateSearch = (locationValues, dayValues) => {
    this.setState({
      locationValues,
      dayValues,
      showCarDetails: true
    });
  }


  /**
   * Function to reset the state of
   * locationValues, dayValues and showCarDetails such that landing page is displayed
   * 
   * @memberOf App
   */
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
