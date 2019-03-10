import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';
import {location, availability} from './../constants/drop-down-list';

import './css/LandingPage.css';

let locationValues = [],
  dayValues = [];

export default function LandingPage(props) {
  // Reset the locationValues nad dayValues when the landing page is rendered
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

/**
 * Function to set the values of locationValues
 * 
 * @param {any} event - react synthetic event
 * @param {any} data - the data of dropdown state
 */
function setLocationValues(event, data) {
  locationValues = data.value;
}

/**
 * Function to set the values of dayValues
 * 
 * @param {any} event - react synthetic event
 * @param {any} data - the data of dropdown state
 */
function setDayValues(event, data) {
  dayValues = data.value;
}

/**
 * Function to update the search filters
 * 
 * @param {any} props - props passed to the LandingPage component
 */
function handleSubmit(props) {
  // Update the search when both fields are present else show alert message
  if (locationValues.length && dayValues.length) {
    props.updateSearch(locationValues, dayValues);
  } else {
    alert('Fields cannot be Empty!')
  }
}