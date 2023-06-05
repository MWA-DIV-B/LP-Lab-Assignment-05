
import React, { useState } from "react";
import Input from './Input';

let curtime = new Date();
curtime = curtime.getHours();
let greet = "";
const style = {};

if (curtime >= 1 && curtime < 12) {
  greet = "Good Morning";
  style.color = "green";
} else if (curtime >= 12 && curtime < 17) {
  greet = "Good Afternooon";
  style.color = "orange";
} else if (curtime >= 17 && curtime < 21) {
  greet = "Good Evening";
  style.color = "red";
} else {
  greet = "Good Night";
  style.color = "blue";
}

function App() {
  const [fullName, setFullName] = useState({
    fname :'',
    lname :'',
    iname :'',
    jname :'',
  });
  
  const inputEvent = (event) => {
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value

    setFullName((preVal)=>{
    return{
      ...preVal,
      [name]:value,

    };

    });

    };
  
  const onsubmit = (e) => {
    e.preventDefault();
    alert("submitted ")
  };

  return (
    <>
    <form onSubmit={onsubmit}>
      <div className="head">
        <h4>
          Hello {fullName.fname} {fullName.lname} <span style={style}>{greet}...</span>!!!   
        </h4>
        <p>{fullName.iname} {fullName.jname}</p>
      </div>
      <div className="input_field">
       <Input type="text" 
       name="fname"
       placeholder="Enter the name"
       onChange ={inputEvent}
       value={fullName.fname}
        />
       <br/>
       
        <button type="submit" >Click Me</button>
      </div>
      </form>
    </>
  );  
}

export default App;
