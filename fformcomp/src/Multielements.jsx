import { useState } from "react";

// What do we want? - we want to display the value of two input tags simultaneously, those are batch code and course name.

// we have taken name attributes in both the input tags, those are cname and bcode.
// now we are accessing the name and the value of the targeted input tag
// if we are inputing the batch code, targeted name attribute will be bname
// if targeted name is bname, substitute the value of fbcode (after changing the code, it is bcode) with the new accessed value.
// and also we have to store the previous value of the other input tag, in this case it is fcname
// since name attribute is common in both the tags, if we change the value in name attribute, it will erase the previous value.
// for this, there is a default parameter (we have named it preVal in this code) which stores the previous value of ther tags
// therefore we have used the if else loop inside setInfo method, where if the name is bname, retain the previous value of fcname and store the changed value in fbcode.
// else retain the previous value of fbcode and store the changed value in fcname.

function Multielements() {

    let[info, setInfo] = useState({cname:'', bcode:''})

    let display=(event)=>{
      let name= event.target.name;
      let value = event.target.value;

      setInfo((preVal)=>{
        // if (name=='bname') {
        //   return {
        //     fcname:preVal.fcname,
        //     fbcode:value
        //   }
        // } else {
        //   return{
        //     fcname:value,
        //     fbcode: preVal.fbcode
        //   }
        // }

        return{
          ...preVal,
          [name]:value
        }
      })
    }

    let submit=()=>{

    }

  return (
    <>
      <form onSubmit={submit}>
        <h1>Hello {info.cname} {info.bcode}</h1>
        <input type="text" onChange={display} placeholder="Enter batch code" name="bcode"></input>
        <input type='text' placeholder="Enter course name" onChange={display} name="cname"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Multielements;
