import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// program flow :
// here we have called the App component, which we have created in App.jsx and imported that here.
// this App component we are rendering in an HTML element having root id.
// this element with root id is created in index.html
// react is a SPA (Single Page Application), this single page is index.html, the only html page in whole react file.
// therefore code written in App.jsx gets imported in main.jsx and from here it gets rendered to index.html which is shown on the browser screen.
// App.jsx -> main.jsx -> index.html      // this is the flow

createRoot(document.getElementById('root')).render(
  <App/>
)
