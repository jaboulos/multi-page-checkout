import React, { Component } from 'react';
import { fire } from '../firebaseConfig/Fire';

import axios from 'axios';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import CheckInfo from './CheckInfo';
import Summary from './Summary';
import NavBar from './NavBar';
import Orders from './Orders';
import About from './About';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      firstName: '',
      lastName: '',
      email: props.email.email,
      company: '',
      price: 0,
      addresslineone: '',
      addresslinetwo: '',
      city: '',
      state: '',
      zip: 0,
      phone: 0,
      creditcard: '',
      creditcardnumber: 0,
      expirationdate: 0,
      cvv: 0,
      billingzipcode: 0,
      isHidden: true,
      message: ''
    }
    this.handleNext = this.handleNext.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleHomePage = this.handleHomePage.bind(this)
    this.handleOrdersPage = this.handleOrdersPage.bind(this)
    this.handleAbout = this.handleAbout.bind(this)
    this.toggleSummary= this.toggleSummary.bind(this)
    this.goBack = this.goBack.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout() {
    fire.auth().signOut();
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

  handleOrdersPage(event) {
    this.setState({
      currentPage: 6
    })
  }

  handleAbout(event) {
    this.setState({
      currentPage: 7
    })
  }

  goBack(event) {
    this.setState({
      currentPage: this.state.currentPage-1
    })
  }

  handleSubmit(event) {
    let { firstName, lastName, email, company, price, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, creditcardnumber, expirationdate, cvv, billingzipcode } = this.state;
    axios.post('/saveinfo', {
      firstName,
      lastName,
      email,
      company,
      price,
      addresslineone,
      addresslinetwo,
      city,
      state,
      zip,
      phone,
      creditcard,
      creditcardnumber,
      expirationdate,
      cvv,
      billingzipcode
    })
    .then(data => console.log('saved user: ', data))
    .then(this.setState({
      currentPage: 5
    }))
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
    let { currentPage, firstName, lastName, email, company, price, addresslineone, addresslinetwo, city, state, zip, phone, creditcard, creditcardnumber, expirationdate, cvv, billingzipcode } = this.state;

    if( currentPage  === 0) {
      return (
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>
          <h1>Begin Checkout</h1>
          <button onClick={this.handleNext}>Begin Checkout</button>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    } else if( currentPage  === 1) {
      return(
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>
          <div>
            <StepOne
              currentPage={currentPage}
              firstName={firstName}
              lastName={lastName}
              email={email}
              company={company}
              price={price}
              handleHomePage={this.handleHomePage}
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              goBack={this.goBack}
              logout={this.logout}
            />
          </div>
        </div>
      )
    } else if( currentPage  === 2) {
      return(
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>
          <div>
            <button onClick={this.toggleSummary}>Toggle Summary</button>
            {!this.state.isHidden && <Summary
              firstName={firstName}
              lastName={lastName}
              email={email}
              company={company}
              price={price}
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
              logout={this.logout}
            />
          </div>
        </div>
      )
    } else if( currentPage  === 3 ) {
      return(
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>
          <div>
            <button onClick={this.toggleSummary}>Toggle Summary</button>
            {!this.state.isHidden && <Summary
              firstName={firstName}
              lastName={lastName}
              email={email}
              company={company}
              price={price}
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
              creditcardnumber={creditcardnumber}
              expirationdate={expirationdate}
              cvv={cvv}
              billingzipcode={billingzipcode}
              handleHomePage={this.handleHomePage}
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              goBack={this.goBack}
              toggleSummary={this.toggleSummary}
              logout={this.logout}
            />
        </div>
      </div>
      )
    } else if( currentPage === 4) {
      return(
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>

          <div>
            <CheckInfo
              currentPage={currentPage}
              firstName={firstName}
              lastName={lastName}
              email={email}
              company={company}
              price={price}
              addresslineone={addresslineone}
              addresslinetwo={addresslinetwo}
              city={city}
              state={state}
              zip={zip}
              phone={phone}
              creditcard={creditcard}
              creditcardnumber={creditcardnumber}
              expirationdate={expirationdate}
              cvv={cvv}
              billingzipcode={billingzipcode}
              goBack={this.goBack}
              handleHomePage={this.handleHomePage}
              handleSubmit={this.handleSubmit}
              logout={this.logout}
            />
          </div>
        </div>
      )
    } else if( currentPage === 5) {
      return(
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>
          <div>
            <div>
              <h4>Congratulations! Order submitted.  Please return to the Home Page.</h4>
            </div>
          <Summary
            firstName={firstName}
            lastName={lastName}
            email={email}
            company={company}
            price={price}
            addresslineone={addresslineone}
            addresslinetwo={addresslinetwo}
            city={city}
            state={state}
            zip={zip}
            phone={phone}
            creditcard={creditcard}
            creditcardnumber={creditcardnumber}
            expirationdate={expirationdate}
            cvv={cvv}
            billingzipcode={billingzipcode}
          />
          </div>
        </div>
      )
    } else if( currentPage === 6) {
      return (
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>
          <div>
            <Orders
              email={email}
            />
          </div>
        </div>
      )
    } else if( currentPage === 7) {
      return (
        <div>
          <div>
            <NavBar
              currentPage={currentPage}
              handleHomePage={this.handleHomePage}
              handleOrdersPage={this.handleOrdersPage}
              about={this.handleAbout}
              logout={this.logout}
            />
          </div>
          <div>
            <About
              email={email}
            />
          </div>
        </div>
      )
    }
  }
}

export default Homepage;
