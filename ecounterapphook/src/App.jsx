import "./App.css";
import Changestr from "./Changestr";
import Counter from "./Counter";
import Curtime from "./Curtime";
import Sideeffects from "./Sideeffects";

// state is an updated structure that is used to contain data or information about component.
// state in component can change over time, it can be state by using setState() and calling a setState() method tirggers UI updates.

// hooks are the new feature intorduced in React 16.8 version
// it allows you to use state and other React features without writing a class
// hooks does not work inside class component
// hooks always be used at the top level of the React component

// useEffect hook - used to handle side effects
// it has 2 parameters, 1. function (arraow function generally), 2. dependancy array
// useEffect is used to handle side effects like API call, DOM updates, timer, in functional components and to control when that code should run.
// Syntax - useEffect(()=>{},[dependencies])

function App() {
  return (
    <>
      <Counter />
      <Curtime />
      <Changestr/>
      <Sideeffects/>
    </>
  );
}

export default App;
