import { useEffect, useState } from "react";

function Sideeffects() {

    let[count, setCount]=useState(0);
    let[bcode, setBcode]=useState('PS217');

    // no dependancy array
    // useEffect(()=>{  
    //     console.log('This is from useEffect hook');
    // })
    // it will re-render every time the file value changes
    // i.e. everytime we click on increment button or the change batch button, this part will run and we will see this on console

    // with empty dependency
    // useEffect(()=>{  // therefore it will re-render only one time when the file first loads
    //                  // used for API and data fetching.
    //     console.log('This is from useEffect hook');
    // },[])

    // dependancy array with values
    // now in this case, we have 2 state variables in this file, i.e., count and bcode
    // we have given only count state variable in the dependancy array, therefore, only when count variable is triggered everytime then only useEffect method is executed, and not when the bcode variable is called.
    // i.e., whenever we click on Increment button, useEffect is executed everytime, and not when Change Batch is clicked.

    // dependancy array summary
    // [] - run only once
    // [state variable] - dependancy with state variable - runs when state value changes
    // no dependancy array - runs on every render

    useEffect(()=>{  
        console.log('This is from useEffect hook');
    },[count])

    // NOTE - search for cleanup code in useEffect.

    // function IncCount() {
    //     count++;
    //     setCount(count);
    // }

    // function chngbcode() {
    //     if(bcode=='PS217'){
    //         setBcode('PS216')
    //     }else{
    //         setBcode('PS217')
    //     }
    // }
    return(
        <>
            <h1>Hello {bcode}</h1>
            {/* <button onClick={chngbcode}>Change Batch</button> */}
            <button onClick={()=>{bcode==='PS217'?setBcode('PS216'):setBcode('PS217')}}>Change Batch</button>
            <h3>Counter: {count}</h3>
            {/* <button onClick={IncCount}>Increment</button> */}
            <button onClick={()=>setCount(count++)}>Increment</button>


        </>
    )
}

export default Sideeffects;