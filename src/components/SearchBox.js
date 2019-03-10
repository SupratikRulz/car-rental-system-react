import React from 'react';
import './css/SearchBox.css'

export default function SearchBox(props) {
  return (
    <div className='search-box'>
      <input type='text' className='input-box' placeholder='Search for cars' onChange={(event) => handleOnChange(event, props)}/>
    </div>
  )
}

function handleOnChange(event, props) {
  const searchKey = event.target.value.toLowerCase();
  searchKey && props.filterBySearchKey(searchKey);
}