import React from 'react';
import {Card} from 'semantic-ui-react';
import './css/CarCard.css';

function CarCard(props) {
  return (

      <Card
        image='https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1517230618_1500896677_swift.png'
        header='Mahindra XUV 500T'
        meta='Price: $100'
        className='ta-left mw-300'
        extra={
          <>
            <span className='label'>Transmission: Automatic</span>
            <br></br>
            <span className='label'>Fuel: Petrol</span>
            <br></br>
            <span className='label'>Seats: 10</span>
            <br></br>
            <span className='label'>Location: Koramangala</span>
            <br></br>
          </>
        }
      />
  )
}

export default CarCard;
