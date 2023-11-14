'use client'

import { useState } from 'react';
import Map from './map';
// import Link from 'next/link';
// import SubmitButton from './submit-button';
import { useRouter } from 'next/navigation';


export interface BuilderTypes {
  _id: string,
  title: string,
  date: string,
  location: string,
}

interface EventFormProps {
  eventPageLink: string
}

function EventForm ({ eventPageLink }: EventFormProps) {
  const [dateMode, setDateMode] = useState('');
  const [locationMode, setLocationMode] = useState('');
  const [eventBuilder, setEventBuilder] = useState<BuilderTypes>({
    _id: eventPageLink,
    title: '',
    date: '',
    location: ''
  });

  const modesArray = ['Autocracy', 'Democracy'];
  const locationArray = ['I know where', 'I want help'];

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/event', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ ...eventBuilder })
      })
    } catch (error) {
      console.log(error);
    }
  }

  return ( 
    <div className='w-full h-full flex'>
      <form className='m-auto w-[450px]' onSubmit={handleSubmit}>
        <h1 className='text-center text-4xl font-semibold tracking-tighter'>Start a party!</h1>
        <div className='py-3'>
          <input
          type='text' 
          name='title' 
          required={true} 
          placeholder='Title'
          className='w-full form-heading border-b-4 border-black'
          onChange={e => setEventBuilder({...eventBuilder, title: e.target.value})}
          />
        </div>

        <h3 className='form-heading'>When?</h3>
        <div className='flex flex-col justify-around'>
          {/* MODE SELECTION */}
          <div className='flex justify-between'>
            {modesArray.map((mode, index) => {
              return (
                <div key={index}>
                  <input
                  type='radio'
                  id={`${mode}`}
                  name='mode'
                  required={true}
                  onChange={() => setDateMode(mode)}
                  className='hidden peer'
                  />
                  <label className='mode-buttons' htmlFor={`${mode}`}><p className='w-full text-center'>{`${mode} mode`}</p></label>
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
            className='w-full form-heading border-b-4 border-black'
            />
            ||
          (dateMode == 'Democracy') &&
            <p className='w-full form-heading border-b-4 border-black'>some other selection</p>
          }
        </div>

        <h3 className='form-heading pt-3'>Where?</h3>
        <div className='flex flex-col justify-around'>
          {/* LOCATION SELECTION */}
          <div className='flex justify-between'>
            {locationArray.map((location, index) => {
              return (
                <div key={index}>
                  <input
                  type='radio'
                  id={`${location}`}
                  name='location'
                  required={true}
                  onChange={() => setLocationMode(location)}
                  className='hidden peer'
                  />
                  <label className='mode-buttons text-center' htmlFor={`${location}`}><p className='w-full text-center'>{`${location}`}</p></label>
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
            className='w-full form-heading border-b-4 border-black'
            placeholder="'restaurant', 'bar', 'cafe', etc"
          />  
          }
        </div>
        {/* MUST USE ROUTER.PUSH INSTEAD OF <LINK> TO MAKE REDIRECTION AND POST WORK TOGETHER */}
        <div className='flex justify-center pt-3'>
          <button type='submit' className='btn-secondary justify-center form-heading' onClick={() => router.push(`/${eventPageLink}`)}>
            Ready to go!
          </button>
        </div>
      </form>
    </div>
   );
}

export default EventForm;