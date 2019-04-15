import React from 'react';

const StepThree = ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
    return (
      <div className='form-wrapper'>
        {/* <form> */}
          <div>
            <label>
              creditcard:
              <input onChange={handleChange('creditcard')}></input>
            </label>
          </div>

          <div>
            <label>
              expirationdate:
              <input onChange={handleChange('expirationdate')}></input>
            </label>
          </div>

          <div>
            <label>
              cvv:
              <input onChange={handleChange('cvv')}></input>
            </label>
          </div>

          <div>
            <label>
              billingzipcode:
              <input onChange={handleChange('billingzipcode')}></input>
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

export default StepThree;