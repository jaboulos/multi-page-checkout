import React from 'react';

const StepOne = ({handleChange, handleNext}) =>{
    return (
      <div>
        Name:
      <input onChange={handleChange('name')}></input>
        Email:
      <input onChange={handleChange('email')}></input>
        Password:
      <input onChange={handleChange('password')}></input>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    )
}

export default StepOne;