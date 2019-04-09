import React from 'react';

const StepThree = ({handleChange, handleNextFour}) =>{
    return (
      <div>

        creditcard:
      <input onChange={handleChange('creditcard')}></input>
        expirationdate:
      <input onChange={handleChange('expirationdate')}></input>
        cvv:
      <input onChange={handleChange('cvv')}></input>
        billingzipcode:
      <input onChange={handleChange('billingzipcode')}></input>
      <button onClick={() => handleNextFour()}>Next</button>
      </div>
    )
}

export default StepThree;