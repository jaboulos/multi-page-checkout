import React from 'react';

const StepOne = ({handleChange, handleNextTwo}) =>{
    return (
      <div>
        Name:
      <input onChange={handleChange('name')}></input>
        Email:
      <input onChange={handleChange('email')}></input>
        Password:
      <input onChange={handleChange('password')}></input>
        <button onClick={() => handleNextTwo()}>Next</button>
      </div>
    )
}

export default StepOne;