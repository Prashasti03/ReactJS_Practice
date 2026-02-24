import { useState } from "react";

const Curtime=()=>{
    
    let[ctime, setTime]= useState('00:00:00')

    let Change=()=>{
        let dt= new Date().toLocaleTimeString();
        setTime(dt);
    }

    setInterval(Change, 1000);  // setInterval - executes same code after specified period of time
    // here setInterval calls Change() function
    // Change() retirieves current time from system, then sets it to setTime
    // setTime then passes it to ctime, which is displayed on the screen

    return(
        <>
            <h2>Current Time: {ctime}</h2>
            {/* <button onClick={Change}>Time</button> */}
        </>
    )
}

export default Curtime;