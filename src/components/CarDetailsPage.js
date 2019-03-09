import React, { Component } from 'react';
import CarCard from './CarCard';
import './css/CarDetailsPage.css';
export default class CarDetailsPage extends Component {

  constructor() {
    super();
    this.state = {
      cars: [],
      filteredCars: [],
      unavailableCars: []
    }
  }

  componentDidMount() {
    let {locationValues, dayValues} = this.props;
    fetch('https://api.sheety.co/311576ae-321a-43e3-9a5b-61b3ac373d85')
      .then(data => data.json())
      .then(cars => {
        let filteredCars,
          unavailableCars;
        this.setState({
          cars
        });
        filteredCars = cars
                        .filter(car => locationValues.includes(car.location))
                        .filter(car => {
                          let availableDays = car.availability.split(', ');
                          for (let availableDay of availableDays) {
                            for (let dayValue of dayValues) {
                              if (availableDay === dayValue) {
                                return true;
                              }
                            }
                          }
                          return false;
                        });
          unavailableCars = cars
                            .filter(car => locationValues.includes(car.location))
                            .filter(car => {
                              let availableDays = car.availability.split(', ');
                              for (let availableDay of availableDays) {
                                for (let dayValue of dayValues) {
                                  if (availableDay === dayValue) {
                                    return false;
                                  }
                                }
                              }
                              return true;
                            });
        this.setState({
          filteredCars,
          unavailableCars
        })
      })
  }

  render() {
    const {filteredCars, unavailableCars} = this.state;
    return (
      <>
        <div> Filter Section </div>
        <div className='car-details-container'>
          {filteredCars.map(car => <CarCard {...car}/>)}
          {unavailableCars.map(car => <CarCard {...car} unavailable/>)}
        </div>
      </>
    )
  }
}
