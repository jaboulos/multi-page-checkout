// import React from 'react';

// const App = (props) => {
//   return (
//     <div>
//       {props.children}
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import fire from './firebaseConfig/Fire';

import Login from './components/Login';
import Homepage from './components/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user })
      } else {
        this.setState( {user: null })
      }
    })
  }

  render() {
    return(
      <div className="container">

        {/* { this.state.user ? this.props.children : <Login /> } */}
        { this.state.user ? (<Homepage email={this.state.user}/>) : (<Login />) }
      </div>
    )
  }
}

export default App;
