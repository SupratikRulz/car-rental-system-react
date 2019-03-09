import React from 'react';
import {Card} from 'semantic-ui-react';
import './css/CarCard.css';

function CarCard(props) {
  const {name, photo, price, seats, transmission, car_Type, fuel_Type, location} = props;
  return (
      <Card
        image={photo}
        header={name}
        meta={`Price: ₹${price}`}
        className='ta-left mw-300 m-40'
        extra={
          <>
            <span className='label'>Transmission: {transmission}</span>
            <br></br>
            <span className='label'>Fuel: {fuel_Type}</span>
            <br></br>
            <span className='label'>Seats: {seats}</span>
            <br></br>
            <span className='label'>Location: {location}</span>
            <br></br>
          </>
        }
      />
  )
}

export default CarCard;
