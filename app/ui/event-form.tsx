
function EventForm () {
  return ( 
    <div className='w-full h-full flex'>
      <form className='m-auto'>
        <h1 className='text-center'>Start a party!</h1>
        <div className='form-control'>
          <h2>Title</h2>
          <input type='text' name='title' required={true} className='w-full'>
          </input>
        </div>

        <h2>Pick a date or ask your guests</h2>
        <div className='form-control flex justify-around'>
          <div>
            <input type='radio' name='mode'/>
            <label className='px-3'>Autocracy mode</label>
          </div>
          <div>
            <input type='radio' name='mode'/>
            <label className='pl-3'>Democracy mode</label>
          </div>
        </div>

        <h2>Pick the location</h2>
        <div className='form-control flex justify-around'>
          <div>
            <input type='radio' name='location' />
            <label className='px-3'>I know where</label>
          </div>
          <div>
            <input type='radio' name='location' />
            <label className='pl-3'>I want help</label>
          </div>
        </div>
      </form>
    </div>
   );
}

export default EventForm;