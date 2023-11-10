'use client'

import { useState } from 'react';
import Map from './map';
// import { v4 as uuidv4 } from 'uuid';

function EventForm () {
const [title, setTitle] = useState('');
const [mode, setMode] = useState('');
const [date, setDate] = useState('');
const [locationMode, setLocationMode] = useState('');

const modesArray = ['Autocracy', 'Democracy'];
const locationArray = ['I know where', 'I want help'];

  return ( 
    <div className='w-full h-full flex'>
      <form className='m-auto w-1/3'>
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
        <div className='form-control flex flex-col justify-around'>
          {/* MODE SELECTION */}
          <div className='flex'>
            {modesArray.map((mode, index) => {
              // const id = uuidv4();
              return (
                <div key={index}>
                  <input
                  type='radio'
                  name='mode'
                  required={true}
                  onChange={() => setMode(mode)}
                  />
                  <label className='px-3'>{`${mode} mode`}</label>
                </div>
              )
            })}
          </div>
          {/* MODE OPTION RENDERING */}
          {(mode == 'Autocracy') &&
            <input
            type='datetime-local'
            name='date'
            required={true}
            onChange={(e) => setDate(e.target.value)}
            />
            ||
          (mode == 'Democracy') &&
            <p>some interactive calendar</p>
          }
        </div>

        <h2>Pick the location</h2>
        <div className='form-control flex flex-col justify-around'>
          {/* LOCATION SELECTION */}
          <div className='flex'>
            {locationArray.map((location, index) => {
              // const id = uuidv4();
              return (
                <div key={index}>
                  <input
                  type='radio'
                  name='location'
                  required={true}
                  onChange={() => setLocationMode(location)}
                  />
                  <label className='px-3'>{`${location}`}</label>
                </div>
              )
            })}
          </div>
          {/* LOCATION OPTION RENDERING */}
          {(locationMode == 'I know where') &&
            <Map />
            ||
          (locationMode == 'I want help') &&
          <input
            type='text'
            name='search'
            required={true}
            className='w-full'
            placeholder='API CALL HERE'
          />  
          }
        </div>
      </form>
    </div>
   );
}

export default EventForm;