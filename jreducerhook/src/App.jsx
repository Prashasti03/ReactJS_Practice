// reducer is a function that manages and updates states based on action
// it is mainly used with reducer hook
// need of reducer hook, when it can be done without hook also - 
// when we need to handle complex logic of state
// syntax - let [state, method] = useReducer(reducer, initialstate)
// state - current value of state variable
// method - function to send action
// reducer - function that updates state
// initial state - initial value
// reducer has 2 parameters, i.e. state and action

import { useReducer } from "react"
import ClassComponent from "./ClassComponent";

function reducer(state, action) {
  if(action.type=='increment'){
    return {count:state.count+1};
  }else if(action.type=='decrement'){
    if(state.count>0){
      return {count:state.count-1};
    }else{
      // return {count: 'Value cannot be less than 0.'}
      return{count: state.count-1}
    }
  }else{
    return {count:0}
  }
}


function App() {
  let initial = {count:0};
  let [state, dispatch] = useReducer(reducer, initial);

  if(state.count == -1){
    throw new Error();
  }

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      {/* <ClassComponent/> */}
    </>
  )
}

export default App

// here initial value of counter is 0 (passed as an object)
// state is a variable, and dispatch and reducer are methods.
// onClick we are passing an object with key type using dispatch method, remember dispatch method already has a key and value pair, i.e., state: current value of counter variable
// this object (action) along with the current state is passed to reducer method
// reducer method checks the value of type key and based on that, updates the value of counter variable
// then passes it back to dispatch method, which passes updated value to state variable
// which then displays it in h1 
