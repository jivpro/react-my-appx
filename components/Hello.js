import React from "react";

const Hellox = (props) => {
  return (
    React.createElement(
      "p", 
      {className: "text-primary"}, 
      "Hello "+ props.name
    )
   
  //  {
  //    type: "p",
  //    props: {
  //      className: "text-primary",
  //      children: "Hello"+props.name
  //    }
  //  }

  );
}

export default Hellox;