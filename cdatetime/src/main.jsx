import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import List from './List.jsx'
import { add, prod, sub } from './Calc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <List/>
    <List/>
    <ol>
      <li>Addition is : {add(10, 20)}</li>
      <li>Multiplication is : {prod(20, 5)}</li>
    </ol>
    {sub(20, 5)}
  </StrictMode>,
)
