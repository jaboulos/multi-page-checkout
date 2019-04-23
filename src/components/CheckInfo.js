import React from 'react';

// const pStyle = {

// }

const CheckInfo = ({firstName, lastName, company, price, currentPage, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, creditcardnumber, expirationdate, cvv, billingzipcode, handleHomePage, handleSubmit, goBack }) =>{
    return (
      <div>
        <div>
          <h4>If the following is correct, complete your order.</h4>
          <p>Current Step: {currentPage}</p>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Company: {company}</p>
          <p>Purchase Cost: {price}</p>
          <p>Address Line 1: {addresslineone}</p>
          <p>Address Line 2: {addresslinetwo}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
          <p>Phone Number: {phone}</p>
          <p>Credit Card: {creditcard}</p>
          <p>Credit Card number: {creditcardnumber}</p>
          <p>CC Expiration Date: {expirationdate}</p>
          <p>CVV: {cvv}</p>
          <p>Billing Zip Code: {billingzipcode}</p>
        </div>
        <div>
          <button onClick={() => goBack()}>Previous Step</button>
          <button onClick={() => handleHomePage()}>Start Over</button>
          <button onClick={() => handleSubmit()}>Complete Order</button>
        </div>

        <div>

        </div>
      </div>
    )
}

export default CheckInfo;