import React from 'react';

// const divStyle {
//   /* display: flex; */
//   flex-wrap: wrap;
//   justify-content: center;
// }

const divContainer = {
  // display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const StepOne = ({handleChange, handleNext, handleHomePage, goBack, logout}) =>{
    return (
      // <div className='form-wrapper'>
      <div className='container'>
      <div style= {divContainer}>
      <div className='col-md-6'>
          <div>
            <label>
              First Name:
              <input placeholder='first name' onChange={handleChange('firstName')}></input>
            </label>
          </div>

          <div>
            <label>
              Last Name:
              <input placeholder='last name' onChange={handleChange('lastName')}></input>
            </label>
          </div>

          <div>
            <label>Retailer: </label>
            <div>
              <select className="col-auto" onChange={handleChange('company')}>
                <option></option>
                <option>Amazon</option>
                <option>Ebay</option>
                <option>Apple</option>
                <option>Walmart</option>
              </select>
            </div>
          </div>

          <div>
            <label>
              Cost:
              <input placeholder='price of purchase' onChange={handleChange('price')}></input>
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
        </div>
      </div>
    )
}

export default StepOne;