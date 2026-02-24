import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import ClassComponent from './ClassComponent.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ErrorBoundary>
    <App />
    
  </ErrorBoundary>,
  <App/>
  <ClassComponent/>
  </>
  
)
