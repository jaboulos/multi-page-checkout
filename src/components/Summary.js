import React from 'react';

const Summary = ({name, email, password, currentPage, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, expirationdate, cvv, billingzipcode }) =>{
  console.log("check info: ", name, {email})
    return (
      <div>
        <div>
          <h4>Verify The Following is correct</h4>
          <p>Current Step: {currentPage}</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Address Line 1: {addresslineone}</p>
          <p>Address Line 2: {addresslinetwo}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
          <p>Phone Number: {phone}</p>
          <p>Credit Card Number: {creditcard}</p>
          <p>CC Expiration Date: {expirationdate}</p>
          <p>CVV: {cvv}</p>
          <p>Billing Zip Code: {billingzipcode}</p>
        </div>
      </div>
    )
}

export default Summary;