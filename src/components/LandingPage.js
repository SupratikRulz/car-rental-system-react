import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import {location, availability} from './../constants/drop-down-list';

import './css/LandingPage.css';

let locationValues = [],
  dayValues = [];

export default function LandingPage(props) {
  locationValues = [];
  dayValues = [];
  return (
    <div className='LandingPage'>
      <Dropdown
        placeholder='Select Location'
        fluid
        multiple
        search
        selection
        options={location}
        className='dropdown-location'
        onChange={setLocationValues}
      />

      <Dropdown
        placeholder='Select Day'
        fluid
        multiple
        search
        selection
        options={availability}
        className='dropdown-availability'
        onChange={setDayValues}
      />

      <Button primary className='submit-btn' onClick={() => handleSubmit(props)}>Submit</Button>
    </div>
  )
}


function setLocationValues(event, data) {
  locationValues = data.value;
}

function setDayValues(event, data) {
  dayValues = data.value;
}

function handleSubmit(props) {
  if (locationValues.length && dayValues.length) {
    props.updateSearch(locationValues, dayValues);
  } else {
    alert('Fields cannot be Empty!')
  }
}