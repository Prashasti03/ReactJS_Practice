import { useState } from "react";

// Here we want to display whatever we type in the input box in <h1>
// for this we will be using onChange event
// input type has a default attribute named 'value' which stores the value user has given in the input field.
// we will give a function named display in onChange event
// every event function (display in this case) has a default parameter (e) in this case, we can name it anything
// e has an in-built methos named target, which is used to access given attribute of the targeted tag (input tag in this case)
// we access the value attribute using 'e.target.value' syntax and pass it to setBcode method
// setBcode method changes the bcode value with this new value passed in the the input text, which is then diplayed on screen using <h1>.

// next requirement: display the value after a button is clicked
// for this we use another useState hook
// we take a button and an onClick event (submit) inside it
// in submit give value of the latest value typed in input text, which is stored in bcode state variable to the new useState state method (setfbcode in this case)
// which will thwn be displayed only ater clicking the button.

// third task: add another input field (course) in this case

function Controlled() {
  let [bcode, setBcode] = useState("PS217");
  let [fbcode, setfbcode] = useState(bcode);
  let [course, setCourse]=useState('Java')
  let [ncourse, setncourse]=useState(course);

  let display = (e) => {
    // console.log(e.target.placeholder);
    // console.log(e.target.value);
    setBcode(e.target.value);
    // setCourse(e.target.value);
  };

  let display1 = (e) => {
    // console.log(e.target.placeholder);
    // console.log(e.target.value);
    // setBcode(e.target.value);
    setCourse(e.target.value);
  };

  function submit(e) {
    // by default form's nature is to refresh the page after clicking the submit button
    // hence value is visible for a second and then gets back to PS217, our original value.
    // to prevent this default nature of form, we use preventDefault(), which stops it from refreshing after hitting the submit button.
    e.preventDefault();
    setfbcode(bcode);
    setncourse(course);
  }

  return (
    <>
      <form onSubmit={submit}>
        <h1>Hello {fbcode}</h1>
        <input
          type="text"
          onChange={display}
          placeholder="Enter batch code"
        ></input>
        <h1>{ncourse}</h1>
        <input type='text' placeholder="Enter course name" onChange={display1}></input>
        {/* <button type="button" onClick={submit}>Batch Code</button> */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Controlled;

// homework - study object concept and spread and rest operator
