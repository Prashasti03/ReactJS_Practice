import { useState } from "react";
import Student from "./Student";

function Profile() {
  let [info, setInfo] = useState({
    name: "",
    id: "",
    address: "",
    mob: "",
  });

  let [collect, setCollect] = useState(info)

  let inputevent=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInfo((prevalue)=>{
        return{
            ...prevalue,
            [name]:value
        }
    }

    )
  }

  let createProfile = (e) => {
    e.preventDefault();
    setCollect(info)
  };

  return (
    <>
      <form onSubmit={createProfile}>
        Student ID: <input type="text" onChange={inputevent} name="id"></input><br></br>
        Student Name : <input type="text" onChange={inputevent} name="name"></input><br></br>
        Address: <input type="text" onChange={inputevent} name="address"></input><br></br>
        Mobile Number: <input type="text" onChange={inputevent} name="mob"></input><br></br>
        <button>Create Profile</button>
      </form>

      {/* <h1>Information: </h1>
      Student Name: {collect.name}<br></br>
      Address: {collect.address}<br></br>
      Mobile no. {collect.mob}<br></br> */}

      <Student info={collect}/>
    </>
  );
}

export default Profile;
