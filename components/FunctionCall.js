import React from "react";

// const Greet = ({name, children}) => { //props destructuring......
const FunctionCall = () => {

  const ClickButton = () =>{
    console.log("Button clicked");
  }

  return(
    <div>
        <button type="button" className="btn btn-primary" onClick={ ClickButton }>Button Click</button>
    </div>
  )
}
export default FunctionCall;