import React from 'react';

const StepTwo= ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
    return (
      <div className='form-wrapper'>
        {/* <form> */}
          <div>
            <label>
              addresslineone:
              <input onChange={handleChange('addresslineone')}></input>
            </label>
            </div>

            <div>
              <label>
                addresslinetwo:
                <input onChange={handleChange('addresslinetwo')}></input>
              </label>
            </div>

            <div>
              <label>
                city:
                <input onChange={handleChange('city')}></input>
              </label>
            </div>

            <div>
              <label>
                state:
                <input onChange={handleChange('state')}></input>
              </label>
            </div>

            <div>
              <label>
                zip:
                <input onChange={handleChange('zip')}></input>
              </label>
            </div>

            <div>
              <label>
                phone:
                <input onChange={handleChange('phone')}></input>
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