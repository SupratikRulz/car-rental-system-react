import React from 'react';
import './css/SearchBox.css'

export default function SearchBox() {
  return (
    <div className='search-box'>
      <input type='text' className='input-box' placeholder='Search for cars'/>
    </div>
  )
}
