// What have we learnt in this file
// 1. applying inline, internal and external CSS
// 2. applying bootstrap
// 3. adding newly defined components (List.jsx) in App.jsx (not recommended for industry)
// 4. importing and exporting multiple variables from one file to another file (from Details.jsx to List.jsx).
// 5. importing and exporting multiple functions from one file to another file (from Calc.jsx to main.jsx)
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let now = new Date()
  console.log(now)
  let dt = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  let hour = now.getHours()

  // internal CSS in camelCase instead of kebab-case used in normal CSS
  let heading = {
    color:'purple',
    textDecoration:'underline'  ,
    textAlign:'center'
  }

  let cssStyle = {}

  let greeting = ''

  if (hour >= 5 && hour < 12) {
    greeting = 'Good Morning'
    cssStyle.color='red'
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Good Afternoon'
    cssStyle.color='purple'
  } else if (hour >= 17 && hour < 21) {
    greeting = 'Good Evening'
    cssStyle.color='blue'
  } else {
    greeting = 'Good Night'
    cssStyle.color='violet'
  }

  return (
    <>
      <h1 style={heading}>This is my Date Time App</h1>
      <h2 className='abc'>Today's Date: {dt}</h2>
      <h2 style={{color:'green'}}>Current Time: {time}</h2>
      <h2 style={cssStyle}>{greeting}</h2>

      <button className='btn btn-success'>Click</button>
    </>
  )
}

// homework: display good morning, afternoon, evening, or night depending on system's current time.

export default App
