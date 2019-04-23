import React from 'react';

const divContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const StepTwo= ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
    return (
      <div className='form-wrapper'>
        {/* <form> */}
          <div>
            <label>
              address line 1:
              <input placeholder='address line 1' onChange={handleChange('addresslineone')}></input>
            </label>
            </div>

            <div>
              <label>
                address line 2:
                <input placeholder='address line 2' onChange={handleChange('addresslinetwo')}></input>
              </label>
            </div>

            <div>
              <label>
                city:
                <input placeholder='city' onChange={handleChange('city')}></input>
              </label>
            </div>

            <div>
              <label>
                state:
                <input placeholder='state' onChange={handleChange('state')}></input>
              </label>
            </div>

            <div>
              <label>
                zip:
                <input placeholder='zip' onChange={handleChange('zip')}></input>
              </label>
            </div>

            <div>
              <label>
                phone #:
                <input placeholder='phone #' onChange={handleChange('phone')}></input>
              </label>
            </div>
            <div>
              <button onClick={() => goBack()}>Previous Step</button>
              <button onClick={() => handleNext()}>Next Step</button>
            </div>
            <div>
              <button onClick={() => handleHomePage()}>Start Over</button>
              <button onClick={() => logout()}>Logout</button>
            </div>

        {/* </form> */}
      </div>
    )
}

export default StepTwo;