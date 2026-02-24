import { useState } from "react";

function Counter() {
    // var count = 0;
    let[count, setCount]=useState(0)  
    // here setState returns an array with tow elements in it, 1st is state variable (count) and 2nd is state method (setCount)

    // flow:
    // 1. useState(0) sets value 0 to count variable, this is a one time step (initialization).
    // 2. curser goes to return statement, when clicked on button onClick event is triggered therefore the cursor moves to IncCount function.
    // 3. in IncCount function, 1st the value of count is incremented by 1 and then incremented value is stored in setCount method.
    // 4. this updated value of setCount is then passed to count variable, which is then displayed on the screen.


    function IncCount() {
        count++;
        console.log(count);
        setCount(count)
    }

    function DecCount() {
        if (count>0) {
            setCount(count--);
        } else {
            setCount(0);
        }
        
        // setCount(count);
    }
    return(
        <>
            <h3>{count}</h3>
            <button onClick={IncCount}>Increment</button>
            <button onClick={DecCount}>Decrement</button>
        </>
    )
}

export default Counter;