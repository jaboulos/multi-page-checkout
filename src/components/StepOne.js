import React from 'react';

const StepOne = ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
    return (
      <div>
        Name:
      <input onChange={handleChange('name')}></input>
        Email:
      <input onChange={handleChange('email')}></input>
        Password:
      <input onChange={handleChange('password')}></input>
        <button onClick={() => handleHomePage()}>Home Page</button>
        <button onClick={() => handleNext()}>Next Step</button>
        <button onClick={() => goBack()}>Previous Step</button>
        <button onClick={() => logout()}>Logout</button>
      </div>
    )
}

export default StepOne;