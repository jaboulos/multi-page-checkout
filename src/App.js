// import React, { Component } from 'react';


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Test</h1>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import Homepage from './components/Homepage';

const App = (props) => {
  return (
    <div>
      <Homepage />
      {props.children}
    </div>
  );
}

export default App;
