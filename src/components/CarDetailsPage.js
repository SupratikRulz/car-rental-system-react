import React, { Component } from 'react';
import CarCard from './CarCard';
import OptionsSection from './OptionsSection';
import './css/CarDetailsPage.css';
import { Button } from 'semantic-ui-react';
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
        <Button primary onClick={this.props.showLandingPage} className='btn-goto'>Goto Previous</Button>
        <OptionsSection applyFilters={this.applyFilters}/>
        <div className='car-details-container'>
          {filteredCars.map(car => <CarCard {...car}/>)}
          {unavailableCars.map(car => <CarCard {...car} unavailable/>)}
        </div>
      </>
    )
  }


  applyFilters = (transmission, carTypes, fuelTypes) => {
    let initialFilteredCars = [...this.state.cars],
      filteredCars = [];
    let {locationValues, dayValues} = this.props;

    filteredCars = initialFilteredCars
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
                      })
                      .filter(entry => (transmission.length ? transmission.includes(entry["transmission"]) : true))
                      .filter(entry => (carTypes.length ? carTypes.includes(entry["car_Type"]) : true))
                      .filter(entry => (fuelTypes.length ? fuelTypes.includes(entry["fuel_Type"]) : true))

    this.setState({filteredCars})    

  }
}
