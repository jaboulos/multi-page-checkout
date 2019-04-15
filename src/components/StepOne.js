import React from 'react';

const StepOne = ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
    return (
      <div className='form-wrapper'>
        {/* <form> */}
          <div>
            <label>
              Name:
              <input onChange={handleChange('name')}></input>
            </label>
          </div>

          <div>
            <label>
              Password:
              <input onChange={handleChange('password')}></input>
            </label>
          </div>
        {/* </form> */}
        <div>
          <button onClick={() => goBack()}>Previous Step</button>
          <button onClick={() => handleNext()}>Next Step</button>
        </div>
        <div>
          <button onClick={() => handleHomePage()}>Start Over</button>
          <button onClick={() => logout()}>Logout</button>
        </div>

      </div>
    )
}

export default StepOne;