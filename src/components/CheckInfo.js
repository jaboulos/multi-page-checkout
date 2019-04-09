import React from 'react';

const CheckInfo = ({name, email, password, currentPage, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, expirationdate, cvv, billingzipcode }) =>{
    return (
      <div>
        {name}
        {email}
        {password}
        {currentPage}
        {addresslineone}
        {addresslinetwo}
        {city}
        {state}
        {zip}
        {phone}
        {creditcard}
        {expirationdate}
        {cvv}
        {billingzipcode}
      </div>
    )
}

export default CheckInfo;