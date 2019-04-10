import React from 'react';

const StepThree = ({handleChange, handleNext, handleHomePage, goBack}) =>{
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
      <button onClick={() => handleHomePage()}>Home Page</button>
      <button onClick={() => handleNext()}>Next Step</button>
      <button onClick={() => goBack()}>Previous Step</button>
      </div>
    )
}

export default StepThree;