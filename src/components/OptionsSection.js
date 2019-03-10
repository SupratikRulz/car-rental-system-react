import React from 'react';
import './css/OptionsSection.css';
import SearchBox from './SearchBox';
import {Dropdown, Button} from 'semantic-ui-react';
import {transmission, carType, fuelType} from './../constants/drop-down-list';

let transmissionValues = [],
  carTypeValues = [],
  fuelTypeValues = [];

export default function OptionsSection(props) {
  return (
    <>
      <div className='FilerSection'>
        <div className='dropdown-filter'>Filter Options:</div>
        <Dropdown
          fluid
          multiple
          search
          selection
          className='dropdown-filter'
          placeholder='Transmission'
          options={transmission}
          onChange={setTransmissionValues}
        />
        <Dropdown
          fluid
          multiple
          search
          selection
          className='dropdown-filter'
          placeholder='Car Type'
          options={carType}
          onChange={setCarTypeValues}
        />
        <Dropdown
          fluid
          multiple
          search
          selection
          className='dropdown-filter'
          placeholder='Fuel'
          options={fuelType}
          onChange={setFuelTypeValues}
        />
        <Button primary className='dropdown-filter btn-apply' onClick={() => applyFilters(props)}>Apply</Button>
      </div>
      <div className='SearchSection'>
        <div>Sort by: <Button icon='money'></Button></div>
        <SearchBox />
      </div>
    </>
  )
}

function setTransmissionValues (event, data) {
  transmissionValues = data.value;
}

function setCarTypeValues (event, data) {
  carTypeValues = data.value;
}

function setFuelTypeValues (event, data) {
  fuelTypeValues = data.value;
}

function applyFilters (props) {
  props.applyFilters(transmissionValues, carTypeValues, fuelTypeValues);
}