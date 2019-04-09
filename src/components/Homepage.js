import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 3,
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
    this.handleNextTwo = this.handleNext.bind(this)
    this.handleNextThree = this.handleNext.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleNext(event) {
    this.setState({
      currentPage: 1
    })
  }
  handleNextTwo(event) {
    this.setState({
      currentPage: 3
    })
  }
  handleNextThree(event) {
    this.setState({
      currentPage: 0
    })
  }

  handleChange(key) {
    return (e) => this.setState({ [key]: e.target.value })
  }

  render() {
    let { currentPage, name, email, password, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, expirationdate, cvv, billingzipcode } = this.state;
    if( currentPage  === 0) {
      return (
        <div>
          <h1>Begin Checkout</h1>
          <h2>Test</h2>
          <button onClick={this.handleNext}>Begin Checkout</button>
        </div>
      );
    }
    else if( currentPage  === 1) {
      return(
        <StepOne
          currentPage={currentPage}
          name={name}
          email={email}
          password={password}
          handleChange={this.handleChange}
          handleNext={this.handleNext}
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
          handleNext={this.handleNextThree}
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
          handleNext={this.handleNextThree}
        />
      )
    }
  }
}

export default Homepage;
