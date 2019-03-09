import React, { Component } from 'react';
import './css/App.css';
import Header from './Header';

class App extends Component {

  constructor() {
    super();

    this.state = {
      formSubmitted: false
    };
  }

  render() {

    
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
