import React from 'react';

const StepTwo= ({handleChange, handleNextThree}) =>{
    return (
      <div>
        Name:
      <input onChange={handleChange('addresslineone')}></input>
        addresslineone:
      <input onChange={handleChange('addresslinetwo')}></input>
        addresslinetwo:
      <input onChange={handleChange('city')}></input>
        city:
      <input onChange={handleChange('state')}></input>
        state:
      <input onChange={handleChange('zip')}></input>
        zip:
      <input onChange={handleChange('phone')}></input>
        phone:
      <button onClick={() => handleNextThree()}>Next</button>
      </div>
    )
}

export default StepTwo;