import React from 'react';

const Summary = ({firstName, lastName, email, company, price, currentPage, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, expirationdate, cvv, billingzipcode }) =>{
    return (
      <div>
        <div>
          <h4>Order Information</h4>
          <p>Current Step: {currentPage}</p>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Cost: {price}</p>
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