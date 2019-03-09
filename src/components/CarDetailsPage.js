import React, { Component } from 'react';
import CarCard from './CarCard';
import './css/CarDetailsPage.css';
export default class CarDetailsPage extends Component {
  render() {
    return (
      <div className='car-details-container'>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    )
  }
}
