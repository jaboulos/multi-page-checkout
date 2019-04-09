import React from 'react';

const StepTwo= ({handleChange, handleNextThree}) =>{
    return (
      <div>
        addresslineone:
      <input onChange={handleChange('addresslineone')}></input>
        addresslinetwo:
      <input onChange={handleChange('addresslinetwo')}></input>
        city:
      <input onChange={handleChange('city')}></input>
        state:
      <input onChange={handleChange('state')}></input>
        zip:
      <input onChange={handleChange('zip')}></input>
        phone:
      <input onChange={handleChange('phone')}></input>
      <button onClick={() => handleNextThree()}>Next</button>
      </div>
    )
}

export default StepTwo;