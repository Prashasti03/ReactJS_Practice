import React from 'react'

// Here App() is a component (functional component)
// there two types of components in React: 1. functional components( frequently used), 2. Class components(difficult, therefore less used)
// DOM can perform 4 types of manipulation - 1. attribute, 2. CSS, 3. value, 4. html
function App() {
  let name = 'Prashasti';
  let bcode = 'PS217';
  let link = 'https://www.tcs.com';
  return (
    <React.Fragment>
      <h1>Hello World...</h1>
      <p>Hello from ITVedant</p>
      <h2>My name is {name}</h2>
      <h2>Addition is: {2+5}</h2>
      <p>{`Batch code is: ${bcode}`}</p>
      <a href="https://itvedant.com" target='_blank'>ITVedant Website Link</a><br></br>
      <a href={link} target='_blank'>TCS Website Link</a>
    </React.Fragment>
  )
}

export default App
