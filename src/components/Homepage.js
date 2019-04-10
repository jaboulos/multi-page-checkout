import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import CheckInfo from './CheckInfo';
import axios from 'axios';

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
      billingzipcode: '',
      showSummary: false
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleHomePage = this.handleHomePage.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  handleNext(event) {
    this.setState({
      currentPage: this.state.currentPage+1
    })
  }

  handleHomePage(event) {
    this.setState({
      currentPage: 0
    })
  }

  goBack(event) {
    this.setState({
      currentPage: this.state.currentPage-1
    })
  }

  handleSubmit(event) {
    let { name, email, password, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, expirationdate, cvv, billingzipcode } = this.state;
    axios.post('/saveinfo', {
      name,
      email,
      password,
      addresslineone,
      addresslinetwo,
      city,
      state,
      zip,
      phone,
      creditcard,
      expirationdate,
      cvv,
      billingzipcode
    })
    .then(data => console.log('saved user: ', data))
    .catch(err => console.log('error: ', err))
  }

  handleChange(key) {
    return (e) => this.setState({ [key]: e.target.value })
  }

  toggleSummary() {

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
          handleHomePage={this.handleHomePage}
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          goBack={this.goBack}
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
          handleHomePage={this.handleHomePage}
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          goBack={this.goBack}
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
          handleHomePage={this.handleHomePage}
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          goBack={this.goBack}
        />
      ) }else if( currentPage === 4) {
        return(
          <CheckInfo
            currentPage={currentPage}
            name={name}
            email={email}
            password={password}
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
            goBack={this.goBack}
            handleHomePage={this.handleHomePage}
            handleSubmit={this.handleSubmit}
          />
      )
    }
  }
}

export default Homepage;
