import React, { Component } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import CheckInfo from './CheckInfo';
import Summary from './Summary';

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
      isHidden: true
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleHomePage = this.handleHomePage.bind(this)
    this.toggleSummary= this.toggleSummary.bind(this)
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
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    let { currentPage, name, email, password, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, expirationdate, cvv, billingzipcode, isEmptyState } = this.state;

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
        <div>
          <button onClick={this.toggleSummary}>Toggle Summary</button>
          {!this.state.isHidden && <Summary
            name={name}
            email={email}
            password={password}
          />}
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
            toggleSummary={this.toggleSummary}
          />
        </div>
      )
    } else if( currentPage  === 3) {
      return(
        <div>
          <button onClick={this.toggleSummary}>Toggle Summary</button>
          {!this.state.isHidden && <Summary
            name={name}
            email={email}
            password={password}
            addresslineone={addresslineone}
            addresslinetwo={addresslinetwo}
            city={city}
            state={state}
            zip={zip}
            phone={phone}
          />}
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
          toggleSummary={this.toggleSummary}
        />
      </div>
      )
    } else if( currentPage === 4) {
      return(
        <div>
          <button onClick={this.toggleSummary}>Toggle Summary</button>
          {!this.state.isHidden && <Summary
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
          />}
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
        </div>
      )
    }
  }
}

export default Homepage;
