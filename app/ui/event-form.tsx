'use client'

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function EventForm () {
const [title, setTitle] = useState('');
const [mode, setMode] = useState('');
const [location, setLocation] = useState('');

const modesArray = ['Autocracy', 'Democracy'];
const locationArray = ['I know where', 'I want help'];

  return ( 
    <div className='w-full h-full flex'>
      <form className='m-auto'>
        <h1 className='text-center'>Start a party!</h1>
        <div className='form-control'>
          <h2>Title</h2>
          <input
          type='text' 
          name='title' 
          required={true} 
          value={title}
          className='w-full'
          onChange={e => setTitle(e.target.value)}
          />
        </div>

        <h2>Pick a date or ask your guests</h2>
        <div className='form-control flex justify-around'>
          {/* MODE SELECTION */}
          {modesArray.map((mode, index) => {
            return (
              <div key={index}>
                <input
                key={index}
                type='radio'
                name='mode'
                onChange={() => setMode(mode)}
                />
                <label>{`${mode} mode`}</label>
              </div>
            )
          })}
        </div>

        <h2>Pick the location</h2>
        <div className='form-control flex'>
          {/* LOCATION SELECTION */}
          {locationArray.map((location, index) => {
            return (
              <div key={index}>
                <input
                key={index}
                type='radio'
                name='location'
                onChange={() => setLocation(location)}
                />
                <label>{`${location}`}</label>
              </div>
            )
          })}
        </div>
      </form>
    </div>
   );
}

export default EventForm;