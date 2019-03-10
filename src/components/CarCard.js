import React, {useState} from 'react';
import {Card, Button} from 'semantic-ui-react';
import './css/CarCard.css';

function CarCard(props) {
  const {name, photo, price, seats, transmission, fuel_Type, location, unavailable} = props;
  const [selected, setSelectedState] = useState(false);
  const seletedClass = selected ? ' card-selected': '',
    unavailableClass = unavailable ? ' unavailable' : '';
  return (
      <Card
        image={photo}
        header={name}
        meta={`Price: ₹${price}`}
        className={'ta-left mw-300 m-40' + seletedClass + unavailableClass}
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
            {
              unavailable ? (
                <>        
                  <span className={'label red'}>NOT AVAILABLE</span>
                  <br></br>
                </>
              ) : (
                <>
                  <Button primary floated='left' className='btn' onClick={() => setSelectedState(!selected)}>{selected ? 'Unseclect' : 'Select'}</Button>
                  <Button primary floated='right' className='btn'>Book Now</Button>
                </>
              )
            }
          </>
        }
      />
  )
}

export default CarCard;
