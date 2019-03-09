import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';
import LandingPage from './LandingPage';

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

  render() {
    const {locationValues, dayValues, showCarDetails} = this.state;
    return (
      <div className="App">
        <Header />
        <LandingPage updateSearch={this.updateSearch}/>
      </div>
    );
  }
}

export default App;
