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

import React from 'react';

const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default App;
