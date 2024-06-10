import React from "react";

function Keypad (){
  return (
    <input type="password" onChange={event => console.log("Entering password...")}></input>
  )
}

export default Keypad;