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
      filterLocationDate: [],
      filteredCars: [],
      unavailableCars: [],
      currentPage: 1,
      carsPerPage: 6
    }
    // Holder for the applied filters
    this.appliedFilters = {
      transmission: [],
      carTypes: [],
      fuelTypes: []
    }
  }

  componentDidMount() {
    let {locationValues, dayValues} = this.props;

    // Fetch the data from the URL and set states of filtered cars, unavailable cars.
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
          unavailableCars,
          filterLocationDate: filteredCars
        })
      })
  }

  render() {
    const {filteredCars, unavailableCars, currentPage, carsPerPage} = this.state;
    const lastIndexOfCar = currentPage * carsPerPage;
    const firstIndexOfCar = lastIndexOfCar - carsPerPage;
    const totalElements = [...filteredCars.map((car, index) => <CarCard {...car} key={index + car.name}/>), ...unavailableCars.map((car, index) => <CarCard {...car} unavailable key={index + car.name}/>)];
    const renderElements = totalElements.slice(firstIndexOfCar, lastIndexOfCar);

    // Logic for pagination
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalElements.length / carsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handlePageClick}
        >
          {number}
        </li>
      );
    });
    return (
      <>
        <Button primary onClick={this.props.showLandingPage} className='btn-goto'>Goto Previous</Button>
        <OptionsSection applyFilters={this.applyFilters} filterBySearchKey={this.filterBySearchKey} sortByPrice={this.sortByPrice}/>
        <div className='car-details-container'>
          {renderElements}
        </div>
        <div className='pagination'>
          <div>Select to navigate</div>
          <p>Current Page: {currentPage}</p>
          <ul className='page-numbers'>
            {renderPageNumbers}
          </ul>
        </div>
      </>
    )
  }

  /**
   * Function to apply filters when apply filter button is pressed
   * and update the filtered cars
   * 
   * @memberOf CarDetailsPage
   */
  applyFilters = (transmission, carTypes, fuelTypes) => {
    let initialFilteredCars = [...this.state.filterLocationDate],
      filteredCars = [];

    this.appliedFilters = {
      transmission, carTypes, fuelTypes
    };

    filteredCars = initialFilteredCars
                      .filter(entry => (transmission.length ? transmission.includes(entry["transmission"]) : true))
                      .filter(entry => (carTypes.length ? carTypes.includes(entry["car_Type"]) : true))
                      .filter(entry => (fuelTypes.length ? fuelTypes.includes(entry["fuel_Type"]) : true))

    this.setState({filteredCars});
  }

  /**
   * Function to filter the cars according to the search key
   * It also resets the pagination to first page
   * 
   * @memberOf CarDetailsPage
   */
  filterBySearchKey = (searchKey) => {
    let initialFilteredCars = [...this.state.filterLocationDate],
      filteredCars = [];
    const {transmission, carTypes, fuelTypes} = this.appliedFilters;

    filteredCars = initialFilteredCars
                    .filter(entry => (transmission.length ? transmission.includes(entry["transmission"]) : true))
                    .filter(entry => (carTypes.length ? carTypes.includes(entry["car_Type"]) : true))
                    .filter(entry => (fuelTypes.length ? fuelTypes.includes(entry["fuel_Type"]) : true))
                    .filter(car => {
                      if (car.name.toLowerCase().includes(searchKey)) {
                        return true;
                      }
                      if (car.car_Type.toLowerCase().includes(searchKey)) {
                        return true;
                      }
                      return false;
                    })

    this.setState({
      filteredCars,
      currentPage: 1
    });
  }

  /**
   * Function to sort the cars according to the price
   * 
   * @memberOf CarDetailsPage
   */
  sortByPrice = () => {
    let filteredCars = [...this.state.filteredCars];
      filteredCars = filteredCars.sort((a, b) => a.price - b.price);
      this.setState({filteredCars});
  }

  /**
   * Function to change the current page
   * when page button is clicked
   * 
   * @memberOf CarDetailsPage
   */
  handlePageClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
}
