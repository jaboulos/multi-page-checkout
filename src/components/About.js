import React from 'react';


const divContainer = {
  display: 'flex',
  justifyContent: 'center',
  // alignItems: 'stretch' | 'flexStart' | 'flexEnd' | 'center' | 'baseline',
  height: '100vh',
  // width: '250px',
}
const divStyle = {
  margin: '80px',
  border: '5px solid green'
}

const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
}

const title = {
  fontSize: '30px',
  textAlign: 'center',
}


const About = () => {
  return(
    <div className='container' style={ divContainer }>
      <div style={ divStyle }>
        <p style={ title }>This is my about page</p>
        <p stlye={ pStyle }>Some content</p>
      </div>
    </div>
  )
}

export default About