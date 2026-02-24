import { createContext } from "react";
import Compa from "./Compa";
import Compc from "./Compc";

let Bcode = createContext();   // context created
let Cname = createContext();

function Parentcomp(){
    let b = 'PS217';
    return(
        <>
            <h3>Hello {b}</h3>
            <h1>This is from Parent Component</h1>
            {/* <Compa/> */}
            <Bcode.Provider value={'PS217'}>
                <Cname.Provider value={'Python'}>
                    <Compc/>
                </Cname.Provider>
            </Bcode.Provider>
        </>
    )
}

export default Parentcomp;
export {Bcode, Cname};