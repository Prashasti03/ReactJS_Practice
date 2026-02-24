import { useRef, useState } from "react";

function Uncontrolled() {
    let[code, setBcode]=useState('');

    let bcode=useRef();

    let submit=(e)=>{
        e.preventDefault();
        // alert(`Your Batch Code is: ${bcode.current.value}`)
        setBcode(bcode.current.value)
    }
  return (
    <>
      <form onSubmit={submit}>
        <h1>Hello {code}</h1>
        <input type="text" placeholder="Enter batch code" ref={bcode}></input>
        {/* <button type="button" onClick={submit}>Batch Code</button> */}
        <button type="submit">Batch Code</button>
      </form>
    </>
  );
}

export default Uncontrolled;
