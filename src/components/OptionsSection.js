import React from 'react';
import './css/OptionsSection.css';

import {Dropdown} from 'semantic-ui-react';

import {transmission, carType, fuelType} from './../constants/drop-down-list';

export default function OptionsSection() {
  return (
    <div className='OptionsSection'>
      <div className='dropdown-filter'>Filter Options</div>
      <Dropdown
        fluid
        multiple
        search
        selection
        className='dropdown-filter'
        placeholder='Transmission'
        options={transmission}
      />
      <Dropdown
        fluid
        multiple
        search
        selection
        className='dropdown-filter'
        placeholder='Car Type'
        options={carType}
      />
      <Dropdown
        fluid
        multiple
        search
        selection
        className='dropdown-filter'
        placeholder='Fuel'
        options={fuelType}
      />
    </div>
  )
}
