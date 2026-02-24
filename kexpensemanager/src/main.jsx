import './index.css'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { ExpenseProvider } from './ExpenseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ExpenseProvider>
    <App />
  </ExpenseProvider>,
)
