'use client'

import { useState } from 'react';
import Map from './map';
import SubmitButton from './submit-button';

export interface BuilderTypes {
  title: string,
  date: string,
  location: string
}

function EventForm () {
  const [dateMode, setDateMode] = useState('');
  const [locationMode, setLocationMode] = useState('');
  const [eventBuilder, setEventBuilder] = useState<BuilderTypes>({
    title: '',
    date: '',
    location: ''
  });

  const modesArray = ['Autocracy', 'Democracy'];
  const locationArray = ['I know where', 'I want help'];

  return ( 
    <div className='w-full h-full flex'>
      <form className='m-auto w-[450px]'>
        <h1 className='text-center'>Start a party!</h1>
        <div className='form-control'>
          <h2>Title</h2>
          <input
          type='text' 
          name='title' 
          required={true} 
          className='w-full'
          onChange={e => setEventBuilder({...eventBuilder, title: e.target.value})}
          />
        </div>

        <h2>Pick a date or ask your guests</h2>
        <div className='form-control flex flex-col justify-around'>
          {/* MODE SELECTION */}
          <div className='flex'>
            {modesArray.map((mode, index) => {
              return (
                <div key={index}>
                  <input
                  type='radio'
                  name='mode'
                  required={true}
                  onChange={() => setDateMode(mode)}
                  />
                  <label className='px-3'>{`${mode} mode`}</label>
                </div>
              )
            })}
          </div>
          {/* MODE OPTION RENDERING */}
          {(dateMode == 'Autocracy') &&
            <input
            type='datetime-local'
            name='date'
            required={true}
            onChange={(e) => setEventBuilder({...eventBuilder, date: e.target.value})}
            />
            ||
          (dateMode == 'Democracy') &&
            <p>some interactive calendar</p>
          }
        </div>

        <h2>Pick the location</h2>
        <div className='form-control flex flex-col justify-around'>
          {/* LOCATION SELECTION */}
          <div className='flex'>
            {locationArray.map((location, index) => {
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
            <Map eventBuilder={eventBuilder} setEventBuilder={setEventBuilder}/>
            ||
          (locationMode == 'I want help') &&
          <input
            type='text'
            name='search'
            required={true}
            className='w-full'
            placeholder="search for places with 'restaurant', 'bar', 'cafe', etc"
          />  
          }
        </div>
        <SubmitButton eventDetails={eventBuilder}/>
      </form>
    </div>
   );
}

export default EventForm;