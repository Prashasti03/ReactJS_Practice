import { useState } from "react";

function Changestr(){
    // let bgcolor={
    //     backgroundColor:'yellow',
    //     height:'100px'
    // }
    let [name, setName] = useState('Change')
    let[bgcolor, setBgcolor]=useState('pink');

    let changecolor=()=>{
        setName('Change Again');
        setBgcolor('yellow');
    }

    let goback=()=>{
        setName('Change');
        setBgcolor('violet');
    }
    return(
        <>
            <div style={{backgroundColor:bgcolor}}>
                <button onClick={changecolor} onDoubleClick={goback}>{name}</button>
            </div>
        </>
    )
}

export default Changestr;