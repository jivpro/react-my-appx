import React from "react";

// const Greet = ({name, children}) => { //props destructuring......
const Greet = (props) => {
  const { name, children } = props;
  return(
    <div>
      <h1>Hello {name}</h1>
      {children}
    </div>
  )
}
export default Greet;