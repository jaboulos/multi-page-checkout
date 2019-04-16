import React from 'react';

const StepThree = ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
    return (
      <div className='form-wrapper'>

          {/* <div>
            <label>
              creditcard:
              <input onChange={handleChange('creditcard')}></input>
            </label>
          </div> */}

          <div>
            <label>creditcard: </label>
            <div>
              <select className="col-auto" onChange={handleChange('creditcard')}>
                <option></option>
                <option>Visa</option>
                <option>American Express</option>
                <option>Mastercard</option>
                <option>Discover</option>
              </select>
            </div>
          </div>

          <div>
            <label>
              card number:
              <input placeholder='card number' onChange={handleChange('creditcardnumber')}></input>
            </label>
          </div>

          <div>
            <label>
              expiration date:
              <input placeholder='expiration date' onChange={handleChange('expirationdate')}></input>
            </label>
          </div>

          <div>
            <label>
              cvv:
              <input placeholder='cvv' onChange={handleChange('cvv')}></input>
            </label>
          </div>

          <div>
            <label>
              billing zip code:
              <input placeholder='billing zip code' onChange={handleChange('billingzipcode')}></input>
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
      </div>
    )
}

export default StepThree;