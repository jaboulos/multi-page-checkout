import React from 'react';

const StepTwo= ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
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
      <button onClick={() => handleHomePage()}>Home Page</button>
      <button onClick={() => handleNext()}>Next Step</button>
      <button onClick={() => goBack()}>Previous Step</button>
      {/* <button onClick={() => toggleSummary()}>Check Progress</button> */}
      <button onClick={() => logout()}>Logout</button>
      </div>
    )
}

export default StepTwo;