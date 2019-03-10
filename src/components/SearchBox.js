import React from 'react';
import './css/SearchBox.css'

export default function SearchBox(props) {
  return (
    <div className='search-box'>
      <input type='text' className='input-box' placeholder='Search for cars' onChange={(event) => handleOnChange(event, props)}/>
    </div>
  )
}
/**
 * Function to filter the cars by search key
 * 
 * @param {any} event - react synthetic event
 * @param {any} props - the props passed to the SearchBox component
 */
function handleOnChange(event, props) {
  const searchKey = event.target.value.toLowerCase();
  props.filterBySearchKey(searchKey);
}