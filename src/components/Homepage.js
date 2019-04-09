import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import CheckInfo from './CheckInfo';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      name: '',
      email: '',
      password: '',
      addresslineone: '',
      addresslinetwo: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      creditcard: '',
      expirationdate: '',
      cvv: '',
      billingzipcode: ''
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleNextTwo = this.handleNextTwo.bind(this)
    this.handleNextThree = this.handleNextThree.bind(this)
    this.handleNextFour = this.handleNextFour.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleNext(event) {
    this.setState({
      currentPage: 1
    })
  }
  handleNextTwo(event) {
    this.setState({
      currentPage: 2
    })
  }
  handleNextThree(event) {
    this.setState({
      currentPage: 3
    })
  }
  handleNextFour(event) {
    this.setState({
      currentPage: 4
    })
  }

  handleChange(key) {
    return (e) => this.setState({ [key]: e.target.value })
  }

  render() {
    let { currentPage, name, email, password, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, expirationdate, cvv, billingzipcode } = this.state;
    console.log('state: ', this.state);
    if( currentPage  === 0) {
      return (
        <div>
          <h1>Begin Checkout</h1>
          <button onClick={this.handleNext}>Begin Checkout</button>
        </div>
      );
    } else if( currentPage  === 1) {
      return(
        <StepOne
          currentPage={currentPage}
          name={name}
          email={email}
          password={password}
          handleChange={this.handleChange}
          handleNextTwo={this.handleNextTwo}
        />
      )
    } else if( currentPage  === 2) {
      return(
        <StepTwo
          currentPage={currentPage}
          addresslineone={addresslineone}
          addresslinetwo={addresslinetwo}
          city={city}
          state={state}
          zip={zip}
          phone={phone}
          handleChange={this.handleChange}
          handleNextThree={this.handleNextThree}
        />
      )
    } else if( currentPage  === 3) {
      return(
        <StepThree
          currentPage={currentPage}
          creditcard={creditcard}
          expirationdate={expirationdate}
          cvv={cvv}
          billingzipcode={billingzipcode}
          handleChange={this.handleChange}
          handleNextFour={this.handleNextFour}
        />
      ) }else if( currentPage === 4) {
        return(
          <CheckInfo
            currentPage={currentPage}
            name={name}
            email={email}
            password={password}
            currentPage={currentPage}
            addresslineone={addresslineone}
            addresslinetwo={addresslinetwo}
            city={city}
            state={state}
            zip={zip}
            phone={phone}
            creditcard={creditcard}
            expirationdate={expirationdate}
            cvv={cvv}
            billingzipcode={billingzipcode}
          />
      )
    }
  }
}

export default Homepage;
