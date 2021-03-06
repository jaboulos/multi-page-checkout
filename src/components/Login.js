import React, { Component } from 'react';
import {fire} from '../firebaseConfig/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.state = {
      email: '',
      password: '',
      // firstTime: false
      errorMessage:'Please login or signup before navigating through this site.'
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) =>{})
      //.catch(error => console.log('error: ', error))
      .catch(error => this.setState({
        errorMessage: "invalid email/password"
      }))
  }

  signup(e) {
    e.preventDefault();
    // this.setState({
    //   firstTime: !this.state.firstTime
    // })
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) =>{})
      .then((u)=>{console.log(u)})
      // .catch(error => console.log('error: ', error))
      .catch(error => this.setState({
        errorMessage: "Invalid Email/PW or email is already in use."
      }))
  }

  render() {
    return(
      <div className='col-md-6'>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email Address</label>
            <input value={this.state.email} onChange={this.handleChange} type='email' name='email'
            className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'
            placeholder='Enter email' />
          </div>
          <div className='form-group['>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input value={this.state.password} onChange={this.handleChange} type='password'
            name='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
          </div>
            <button type='submit' onClick={this.login} className='btn btn-primary'>Login</button>
            <button onClick={this.signup} style={{marginLeft: '25px'}} className='btn btn-success'>Signup</button>
        </form>
        <div>
          {this.state.errorMessage}
        </div>
      </div>
    )
  }
}

export default Login;