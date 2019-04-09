import React from 'react';

const StepThree = ({handleChange, handleNextThree}) =>{
    return (
      <div>
        Name:
      <input onChange={handleChange('creditcard')}></input>
        creditcard:
      <input onChange={handleChange('expirationdate')}></input>
        expirationdate:
      <input onChange={handleChange('cvv')}></input>
        cvv:
      <input onChange={handleChange('billingzipcode')}></input>
        billingzipcode:
      <button onClick={() => handleNextThree()}>Next</button>
      </div>
    )
}

export default StepThree;